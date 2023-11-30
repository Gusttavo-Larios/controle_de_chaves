<?php

namespace App\Http\Controllers;

use App\Entities\KeyEntity;
use App\Utils\HandlerControllerExeceptionUtil;
use Illuminate\Http\Request;

class KeyController extends Controller
{
    /** @var KeyEntity */
    private KeyEntity $keyEntity;

    public function __construct()
    {
        $this->keyEntity = new KeyEntity();
    }

    //  CONTROLLERS
    public function preRegistrationKey(Request $request)
    {
        try {
            $res = $this->keyEntity->preRegistrationKey($request->file('file'), $request->user()->id);

            return $res;
        } catch (\Throwable $th) {

            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function getKeys(Request $request)
    {
        try {
            $res = $this->keyEntity->getKeys($request->query('room_name'), $request->user()->id);

            return response()->json($res);
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function getKey(Request $request, int $key_id)
    {
        try {
            $res = $this->keyEntity->getKey($key_id);

            return response()->json($res);
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function enableKey(Request $request)
    {
        try {
            $res = $this->keyEntity->enableKey($request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function disableKey(Request $request)
    {
        try {
            $res = $this->keyEntity->disableKey($request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function useKey(Request $request)
    {
        try {
            $res = $this->keyEntity->useKey($request->user()->id, $request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function returnKey(Request $request)
    {
        try {
            $res = $this->keyEntity->returnKey($request->input('key_id'));

            return response()->json($res);
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }

    public function downloadKeyWithdrawalHistory()
    {
        try {
            $res = $this->keyEntity->downloadKeyWithdrawalHistoryReport();

            return response()->download($res)->deleteFileAfterSend();
        } catch (\Throwable $th) {
            $error = new HandlerControllerExeceptionUtil($th);
            $error = $error->getFormattedError();

            return response([
                'message' => $error['message']
            ], $error['statusCode']);
        }
    }
}
