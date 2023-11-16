<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/create', function () {


    $user = new User;

    /**
 * Class Server
 * 
 * @property int $id
 * @property int $role_id
 * @property string|null $email
 * @property string|null $identification_number
 * @property string|null $name
 * @property string|null $password
 * 
 * @property Role $role
 * @property Collection|Historic[] $historics
 *
 * @package App\Models
 */

    $user->email = 'email@ifmt.com';
    $user->role_id = 1;
    $user->id = 2;
    $user->name = 'Teste 2';
    $user->identification_number = '1001';
    $user->password = Hash::make('12345');
    $user->save();

    // auth()->login($user);

    return [
        'message' => 'ok'
    ];
});
