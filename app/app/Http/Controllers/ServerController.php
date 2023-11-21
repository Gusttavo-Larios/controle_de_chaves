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

    public function disableRegister(Request $request)
    {
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

    public function enableKey(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->enableKey($request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function disableKey(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->disableKey($request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function getKeys(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->getKeys($request->query('room_name'), $request->user()->id);

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function getKey(Request $request, int $key_id)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->getKey($key_id);

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function useKey(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->useKey($request->user()->id, $request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function returnKey(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->returnKey($request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    // public function historicKey(Request $request, int $key_id)
    // {
    //     try {
    //         $core = new ServerBusinessLogic();

    //         $res = $core->getHistoricByKey($key_id);

    //         return response()->json($res);
    //     } catch (\Throwable $th) {
    //         $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

    //         return response([
    //             'message' => $th->getMessage()
    //         ], $code);
    //     }
    // }

    public function downloadKeyWithdrawalHistory()
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->downloadKeyWithdrawalHistoryReport();

            return response()->download($res)->deleteFileAfterSend();
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function preRegistrationServer(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->preRegistrationServer($request->file('file'), $request->user()->id);

            return $res;
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }

    public function getServers(Request $request)
    {
        try {
            $core = new ServerBusinessLogic();

            $res = $core->getServers($request->query('server_name'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $code = $th->getCode() > 399 && $th->getCode() < 500 ? $th->getCode() : 500;

            return response([
                'message' => $th->getMessage()
            ], $code);
        }
    }
}
