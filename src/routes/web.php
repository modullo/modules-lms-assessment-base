<?php

use Illuminate\Support\Facades\Route;
use Modullo\ModulesLmsAssessmentBase\Http\Controllers\ModulesLmsAssessmentBaseController;

Route::group(['namespace' => 'Modullo\ModulesLmsAssessmentBase\Http\Controllers','middleware' => 'web'], function() {

    Route::group(['prefix' => 'learner'], function() {

    });

});
