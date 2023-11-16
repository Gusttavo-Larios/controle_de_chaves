<?php

namespace App\Http\Controllers;

use App\BusinessLogic\ServerBusinessLogic;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    public function completeRegister(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->completeRegister($request->input('email'), $request->input('password'), $request->input('confirmationPassword'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function disableRegister(Request $request) {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->disableRegister($request->user()->id);

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function disableKey(Request $request) {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->disableKey($request->input('room_name'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }
}
