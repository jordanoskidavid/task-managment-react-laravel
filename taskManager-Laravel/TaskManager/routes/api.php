<?php
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::apiResource('projects', ProjectController::class)->only(['index', 'store']);
Route::apiResource('categories', CategoryController::class)->only(['index', 'store']);
Route::apiResource('tasks', TaskController::class)->only(['index', 'store', 'update']);
