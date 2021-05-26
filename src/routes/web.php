<?php

use Illuminate\Support\Facades\Route;
use Lms\ModulesLmsAssessmentBase\Http\Controllers\ModulesLmsAssessmentBaseController;

Route::group(['namespace' => 'Lms\ModulesLmsAssessmentBase\Http\Controllers','middleware' => 'web'],function() {

    Route::group(['prefix' => 'learner'],function(){
        Route::group(['prefix' => 'courses'],function() {
            Route::get('{id}/assessment/{slug}', 'ModulesLmsAssessmentBaseController@show');
        });


    });

});
