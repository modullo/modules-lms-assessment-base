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
            __DIR__.'/resources/js' => public_path('vendor/assessment'),
        ], 'assessment-assets');

        $this->publishes([
            __DIR__.'/config/navigation-settings.php' => config_path('navigation-menu.php')
        ],'menu-config');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/config/navigation-settings.php', 'navigation-menu'
        );
    }
}
