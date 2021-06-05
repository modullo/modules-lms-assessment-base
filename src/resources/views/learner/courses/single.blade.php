@extends('layouts.themes.tabler.tabler')

@section('head_css')
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('vendor/assessment/assets/css/styles.css') }}">
@endsection

@section('head_js')
    <script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
    <script src="https://unpkg.com/babel-polyfill/dist/polyfill.min.js"></script>
    <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-ellipse-progress/dist/vue-ellipse-progress.umd.min.js"></script>
    <script src="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue-icons.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/classic/ckeditor.js"></script>

@endsection


@section('body_content_main')

    @include('modules-lms-base::navigation',['type' => 'learner'])
    <div id="app">
        <nav-bar></nav-bar>
        <b-row>
            <b-col lg="9" class="col-remove-p main-section">
                <open-course @current-lesson="parentListenForLesson" ref="childRef"></open-course>
                <lesson-tabs ref="mobileResponse"></lesson-tabs>
            </b-col>
            <b-col lg="3" class="col-remove-p">
                <sidebar ref="sideContents" @send-video-to-appwrapper="setVideo"></sidebar>
            </b-col>
        </b-row>
        <quiz-questions :id="1"></quiz-questions>
    </div>

@endsection

@section('body_js')
    <script src="{{ asset('vendor/assessment/components/Navbar.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/OpenCourse.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/Sidebar.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/Sidebar-Item.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/LessonTabs.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/Chapter.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/QuizQuestions.js') }}"></script>
    <script src="{{ asset('vendor/assessment/components/Footer.js') }}"></script>
    <script src="{{ asset('vendor/assessment/app.js') }}"></script>
    <script>
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );
    </script>

@endsection


