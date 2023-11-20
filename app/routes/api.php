<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServerController;
use Illuminate\Support\Facades\Route;

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
Route::post('/login', [AuthController::class, 'login']);

Route::post('/server/complete-register', [ServerController::class, 'completeRegister']);

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'server'
], function () {
    Route::post('/disable', [ServerController::class, 'disableRegister']);
    Route::post('/pre-registration', [ServerController::class, 'preRegistrationServer']);
});

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'key'
], function () {
    Route::get('/', [ServerController::class, 'getKeys']);
    Route::get('/{id}', [ServerController::class, 'getKey']);
    Route::post('/disable', [ServerController::class, 'disableKey']);
    Route::post('/use', [ServerController::class, 'useKey']);
    Route::post('/return', [ServerController::class, 'returnKey']);
    Route::get('/historic/download', [ServerController::class, 'downloadKeyWithdrawalHistory']);
    // Route::get('/historic/{id}', [ServerController::class, 'historicKey']);
});