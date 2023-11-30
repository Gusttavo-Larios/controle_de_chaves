<?php

namespace App\BusinessLogic;

use Error;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

use PhpOffice\PhpSpreadsheet\IOFactory;

use App\Models\Server;

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
