<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/websites', 'WebsitesController@index');
Route::post('/websites', 'WebsitesController@store');
