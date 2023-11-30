<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\KeyController;
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
    Route::get('/', [ServerController::class, 'getServers']);
    Route::post('/enable', [ServerController::class, 'enableServer']);
    Route::post('/disable', [ServerController::class, 'disableServer']);
    Route::post('/pre-registration', [ServerController::class, 'preRegistrationServer']);
});

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'key'
], function () {
    Route::get('/', [KeyController::class, 'getKeys']);
    Route::get('/{id}', [KeyController::class, 'getKey']);
    Route::post('/enable', [KeyController::class, 'enableKey']);
    Route::post('/disable', [KeyController::class, 'disableKey']);
    Route::post('/use', [KeyController::class, 'useKey']);
    Route::post('/return', [KeyController::class, 'returnKey']);
    Route::get('/historic/download', [KeyController::class, 'downloadKeyWithdrawalHistory']);
    Route::post('/pre-registration', [KeyController::class, 'preRegistrationKey']);
});
