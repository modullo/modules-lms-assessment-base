<?php

namespace Modullo\ModulesLmsAssessmentBase;
use Illuminate\Support\ServiceProvider;

class ModulesLmsAssessmentBaseServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'modules-lms-assessment-base');

        $this->publishes([
            __DIR__.'/config/modules-lms-assessment-base.php' => config_path('modules-lms-assessment-base.php')
        ], 'modullo-modules');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/config/navigation-menu.php', 'modullo-navigation-menu.modules-lms-assessment-base'
        );
    }
}
