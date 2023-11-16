<?php

namespace App\BusinessLogic;

use App\Models\Historic;
use App\Models\Key;
use Error;
use App\Models\Server;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


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

        $last_usage_record = Historic::where('key_id', $key->id)->orderBy('id', 'desc')->first();

        if(empty($last_usage_record->returned_at)) {
            DB::rollBack();
            throw new Error("A chave $key->room_name está indisponível.", 404);
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
}
