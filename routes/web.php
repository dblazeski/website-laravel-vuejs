<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'spa')->where('any', '.*');
