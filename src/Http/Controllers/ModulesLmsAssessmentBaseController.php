<?php

namespace Modullo\ModulesLmsAssessmentBase\Http\Controllers;

use App\Http\Controllers\Controller;

class ModulesLmsAssessmentBaseController extends Controller
{
    public function show()
    {
        return view('modules-lms-assessment-base::learner.courses.single');
    }
    
}
