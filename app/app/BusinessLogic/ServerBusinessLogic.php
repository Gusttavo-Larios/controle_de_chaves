<?php

namespace App\BusinessLogic;

use App\Models\Historic;
use App\Models\Key;
use Error;
use App\Models\Server;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ServerBusinessLogic
{
    public function login($credentials)
    {
        $server = Server::where('email', $credentials['email'])->first();

        if (empty($server)) {
            throw new Error('Usuário não encontrado.', 404);
        }

        if (empty($server->password)) {
            return [
                'message' => 'Cadastro incompleto.',
                'status' => 'INCOMPLETE_REGISTRATION'
            ];
        }

        if (!auth()->attempt($credentials)) {
            throw new Error('Acesso negado.', 404);
        }

        $server->role;

        return [
            'server' => $server,
            'token' => auth()->login($server)
        ];
    }

    public function completeRegister($email, $password, $confirmationPassword)
    {
        if ($password !== $confirmationPassword) {
            throw new Error('A senha e senha de confirmação devem ser iguais.', 422);
        }

        $server = Server::where('email', $email)->first();

        if (empty($server)) {
            throw new Error('Usuário não encontrado.', 404);
        }

        if ($server->password != '') {
            throw new Error('O cadastro ja foi completado.', 400);
        }

        $server->password = Hash::make($password);
        $server->save();

        return [
            'message' => 'Cadastro completo.'
        ];
    }

    public function getKeys(string | null $room_name, int $server_id)
    {
        $server_role = Server::find($server_id)->role;

        $query = Key::where('room_name', 'like', "%$room_name%");

        if ($server_role->role !== "Administrador") {
            $query->where('key_status.status', '<>', 'Desativada');
        }

        $keys = $query->orderBy('room_name', 'asc')->get();

        $keys->load('key_status');

        return $keys;
    }

    public function getKey(int $key_id)
    {
        $key = Key::find($key_id);
        $key->historics->load('server');
        $key->key_status;
        $key->historics;
        return  $key;
    }

    public function enableKey($key_id)
    {

        $key = Key::find($key_id);

        if (empty($key)) {
            throw new Error('Chave não encontrada.', 404);
        }

        $key->key_status;

        if ($key->key_status->status === "Indisponível") {
            throw new Error("A chave $key->room_name está em uso. Portanto, não pode ser alterada.", 400);
        }

        $key->key_status_id = 1;
        $key->save();

        return [
            'message' => 'Chave ativada.'
        ];
    }

    public function disableKey($key_id)
    {

        $key = Key::find($key_id);

        if (empty($key)) {
            throw new Error('Chave não encontrada.', 404);
        }

        $key->key_status;

        if ($key->key_status->status === "Indisponível") {
            throw new Error("A chave $key->room_name está em uso. Portanto, não pode ser desativada.", 400);
        }

        $key->key_status_id = 3;
        $key->save();

        return [
            'message' => 'Chave desativada.'
        ];
    }

    public function useKey($server_id, $key_id)
    {

        DB::beginTransaction();

        $key = Key::where('id', $key_id)->first();

        if (empty($key)) {
            DB::rollBack();
            throw new Error('Chave não encontrada.', 404);
        }

        $key_status_value = $key->key_status->status;

        if ($key_status_value !== "Disponível") {
            DB::rollBack();
            throw new Error("A chave $key->room_name está $key_status_value. Portanto, não pode ser utilizada.", 400);
        }

        $key->key_status_id = 2;
        $key->save();

        $historic = Historic::create([
            'key_id' => $key->id,
            'returned_at' => null,
            'server_id' => $server_id,
            'withdrawal_at' => date("Y-m-d H:i:s")
        ]);

        DB::commit();

        return $historic;
    }

    public function returnKey($key_id)
    {
        DB::beginTransaction();

        $key = Key::find($key_id);

        if (empty($key)) {
            DB::rollBack();
            throw new Error('Chave não encontrada.', 404);
        }

        $historic = Historic::where('key_id', $key->id)->orderBy('id', 'desc')->first();

        if (empty($historic)) {
            DB::rollBack();
            throw new Error("A chave $key->room_name não está pendente de devolução.", 404);
        }

        $historic->returned_at = date("Y-m-d H:i:s");
        $historic->save();

        $key->key_status_id = 1;
        $key->save();

        DB::commit();

        return $historic;
    }

    // function getHistoricByKey($key_id)
    // {
    //     return Historic::where('key_id', $key_id)->orderBy('id', 'desc')->get();
    // }

    function downloadKeyWithdrawalHistoryReport()
    {
        /* CRIAR XLSX */

        $historics = DB::table('historic')
            ->join('server', 'historic.server_id', '=', 'server.id')
            ->join('key', 'historic.key_id', '=', 'key.id')
            ->select('server.name', 'key.room_name', 'historic.withdrawal_at', 'historic.returned_at')
            ->get();


        // Convertendo uma collection para array
        $array = json_decode(json_encode($historics), true);

        $historics = $array;

        $spreadsheet = new Spreadsheet();
        $activeWorksheet = $spreadsheet->getActiveSheet();

        $activeWorksheet->fromArray(["Servidor", "Sala", "Data Hora Retirada", "Data Hora Devolução"], null, "A1");

        for ($i = 0; $i < count($historics); $i++) {
            $row_index = $i + 2;
            $activeWorksheet->fromArray($historics[$i], null, "A$row_index");
        }

        $writer = new Xlsx($spreadsheet);

        // Obtendo o contéudo do buffer referente ao spreedsheet
        ob_start();
        $writer->save('php://output');
        $content = ob_get_contents();
        ob_end_clean();

        $fileName = 'Relatório de retirada de chaves ' . time() . '.xlsx';

        // Salvando o spreadsheet no storage
        Storage::put($fileName, $content);

        $fileFullPath = storage_path('app/' . $fileName);

        return $fileFullPath;
    }

    function preRegistrationServer(UploadedFile $file, int $server_id)
    {
        $server = Server::find($server_id);

        if ($server->role_id === 2) {
            throw new Error('Você não tem permissão para adicionar novos servidores.', 401);
        }

        /* LER XLSX */
        $fileName = 'profile-' . time() . '.' . $file->getClientOriginalExtension();
        $file = $file->storeAs($fileName);

        $spreadsheet = IOFactory::load("../storage/app/$fileName");
        $data = $spreadsheet->getActiveSheet()->toArray();

        DB::beginTransaction();
        for ($i = 1; $i < count($data); $i++) {
            $server = $data[$i];

            DB::table('server')->insertOrIgnore([
                'name' => $server[0],
                'email' => $server[1],
                'role_id' => 1,
                'server_status_id' => 1,
                'identification_number' => $server[2]
            ]);
        }
        DB::commit();

        Storage::delete($fileName);

        return [
            'message' => 'Pré cadastro completo.'
        ];
    }

    public function getServers(string | null $server_name)
    {
        $servers = Server::where('name', 'like', "%$server_name%")
            ->orderBy('name', 'asc')
            ->get();

        $servers->load('server_status');

        return $servers;
    }

    public function enableServer($server_id, $user_id)
    {

        $user_role = Server::find($user_id)->role->role;

        if ($user_role !== 'Administrador') {
            throw new Error('Você não tem permissão para ativar o cadastro de servidores.', 401);
        }

        $server = Server::find($server_id);

        if (empty($server)) {
            throw new Error('Servidor não encontrado.', 404);
        }

        if ($server_id === $user_id) {
            throw new Error('Não é possível ativar seu cadastro.', 400);
        }

        $server_status = $server->server_status->status;

        if ($server_status === 'Ativo') {
            throw new Error("O servidor $server->name já encontra-se ativo.", 400);
        }

        $server->server_status_id = 1;
        $server->save();

        return [
            'message' => 'Cadastro ativado.'
        ];
    }

    public function disableServer($server_id, $user_id)
    {

        $user_role = Server::find($user_id)->role->role;

        if ($user_role !== 'Administrador') {
            throw new Error('Você não tem permissão para desativar o cadastro de servidores.', 401);
        }

        $server = Server::find($server_id);

        if (empty($server)) {
            throw new Error('Usuário não encontrado.', 404);
        }

        if ($server_id === $user_id) {
            throw new Error('Não é possível desabilitar seu cadastro.', 400);
        }

        if ($server->server_status->status === 'Desativado') {
            throw new Error("O cadastro do usuário $server->name já se encontra desetivado.", 400);
        }

        $server->server_status_id = 2;
        $server->save();

        return [
            'message' => 'Cadastro desativado.'
        ];
    }
}
