<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');

Route::post('/auth/token', \App\Http\Controllers\Api\AuthTokenController::class);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
