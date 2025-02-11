<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::resource()
Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except('index');
