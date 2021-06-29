<?php

namespace Modullo\ModulesLmsAssessmentBase\Http\Controllers;

use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\GuzzleException;
use Hostville\Modullo\Sdk;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class ModulesLmsAssessmentBaseController extends Controller
{
    protected Sdk $sdk;
    public function __construct(Sdk $sdk)
    {
        $this->sdk = $sdk;
    }

    public function show(string $id, Sdk $sdk)
    {
        $sdkObject = $sdk->createCourseService();
        $path = [$id];
        $response = $sdkObject->send('get', $path);
        if ($response->isSuccessful()){
            $data = $response->data['course'];
            return view('modules-lms-assessment-base::learner.courses.single', compact('data'));
        }
        $data = ['error' => 'unable to fetch the requested resource'];
        return view('modules-lms-assessment-base::learner.courses.single', compact('data'));
    }
    
}
