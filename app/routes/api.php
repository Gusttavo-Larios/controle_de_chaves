<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServerController;
use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);

Route::post('/server/complete-register', [ServerController::class, 'completeRegister']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'server'
], function ($router) {
    Route::post('/disable', [ServerController::class, 'disableRegister']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'key'
], function ($router) {
    Route::post('/disable', [ServerController::class, 'disableKey']);
    Route::post('/use', [ServerController::class, 'useKey']);
    Route::post('/return', [ServerController::class, 'returnKey']);
    Route::get('/historic/{id}', [ServerController::class, 'historicKey']);
});


Route::get('/key/historic', function () {

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

    Storage::put('teste.xlsx', $content);

    return Storage::download('teste.xlsx');
});


Route::post('/server/register', function (Request $request) {

    /* LER XLSX */

    $file = $request->file('file');
    $fileName = 'profile-' . time() . '.' . $file->getClientOriginalExtension();
    $file = $file->storeAs($fileName);

    $spreadsheet = IOFactory::load("../storage/app/$fileName");
    $data = $spreadsheet->getActiveSheet()->toArray();

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

    Storage::delete($fileName);

    return Server::all()->toArray();
});
