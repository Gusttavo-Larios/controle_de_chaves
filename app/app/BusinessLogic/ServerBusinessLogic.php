<?php

namespace App\BusinessLogic;

use App\Models\Historic;
use App\Models\Key;
use Error;
use App\Models\Server;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ServerBusinessLogic
{
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

    public function disableRegister($server_id)
    {

        $server = Server::find(4);

        if (empty($server)) {
            throw new Error('Usuário não encontrado.', 404);
        }

        $server->server_status_id = 2;
        $server->save();

        return [
            'message' => 'Cadastro desativado.'
        ];
    }


    public function disableKey($room_name)
    {

        $key = Key::where('room_name', $room_name)->first();

        if (empty($key)) {
            throw new Error('Chave não encontrada.', 404);
        }

        $key->key_status_id = 2;
        $key->save();

        return [
            'message' => 'Chave desativada.'
        ];
    }

    public function useKey($server_id, $room_name)
    {

        DB::beginTransaction();

        $key = Key::where('room_name', $room_name)->first();

        if (empty($key)) {
            DB::rollBack();
            throw new Error('Chave não encontrada.', 404);
        }

        if ($key->key_status_id === 2) {
            DB::rollBack();
            throw new Error("A chave $key->room_name está indisponível.", 400);
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

    function getHistoricByKey($key_id)
    {
        return Historic::where('key_id', $key_id)->orderBy('id', 'desc')->get();
    }

    function downloadKeyWithdrawalHistoryReport()
    {
        /* CRIAR XLSX */

        $historics = DB::table('historic')
            ->join('server', 'historic.server_id', '=', 'server.id')
            ->join('key', 'historic.key_id', '=', 'key.id')
            ->select('server.name', 'key.room_name', 'historic.withdrawal_at', 'historic.returned_at')
            ->get();

        $array = json_decode(json_encode($historics), true);

        $historics = $array;

        $spreadsheet = new Spreadsheet();
        $activeWorksheet = $spreadsheet->getActiveSheet();

        $activeWorksheet->fromArray(["Servidor", "Sala", "Data Hora Retirada", "Data Hora Devolução"], null, "A1");

        for ($i = 0; $i < count($historics) - 1; $i++) {
            $row_index = $i + 2;
            $activeWorksheet->fromArray($historics[$i], null, "A$row_index");
        }

        $writer = new Xlsx($spreadsheet);

        ob_start();
        $writer->save('php://output');
        $content = ob_get_contents();
        ob_end_clean();

        $fileName = 'Relatório de retirada de chaves ' . time() . '.xlsx';

        Storage::put($fileName, $content);

        $downloadContent = Storage::download($fileName);

        return $downloadContent;
    }
}
