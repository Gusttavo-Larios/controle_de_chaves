<?php

namespace App\BusinessLogic;

use Error;
use App\Models\Server;
use Illuminate\Support\Facades\Hash;


class ServerBusinessLogic
{
    public function completeRegister($email, $password, $confirmationPassword)
    {
        if ($password !== $confirmationPassword) {
            throw new Error('A senha e senha de confirmação devem ser iguais.', 422);
        }

        $server = Server::where('email', $email)->first();

        if(empty($server)) {
            throw new Error('Usuário não encontrado.', 404);
        }

        if($server->password != '') {
            throw new Error('O cadastro ja foi completado.', 400);
        }

        $server->password = Hash::make($password);
        $server->save();

        return [
            'message' => 'Cadastro completo.'
        ];
    }
}
