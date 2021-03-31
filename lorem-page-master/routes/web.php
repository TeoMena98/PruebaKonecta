<?php

use Illuminate\Support\Facades\Route;
use App\Comment;
use App\GalleryComment;
use App\Blog;
use App\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'MainController@index');

Route::get('/blog', 'BlogController@index');
Route::get('/blog/create', 'BlogController@create')->middleware('auth');
Route::get('/blog/{id}', 'BlogController@show');
Route::post('/blog/create', 'BlogController@store');

Route::post('/comments/create', 'CommentsController@store');
Route::post('/reply/create', 'ReplyController@store');

Route::get('/gallery', 'GalleryController@index');

Route::get('/user/edit','UserController@update')->middleware('auth');
Route::post('/user/edit', 'UserController@store');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
