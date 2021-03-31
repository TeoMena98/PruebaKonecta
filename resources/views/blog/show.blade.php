<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Firts Steps</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
        
    </head>
    <body>
        @auth
            <script>
                let MyAuth = true
                let userIn = '@json(Auth::user())'
            </script>
        @else
            <script>
                let MyAuth = false
                let userIn = 'nun'
            </script>
        @endauth  
    
        <div id='app'></div>
    </body>

    <script>
        let csrf_token = '<?php echo csrf_token(); ?>';
        let jsonBlogstoShow = '@json($blogs)'    
        let jsonCommentstoShow = '@json($comments)' 
        let jsonRepliestoShow = '@json($replies)'
        let ChildID = '{{$blogs->id}}'
        let ParentID = 1
    </script>

    <script type='text/javascript' src="{{ URL::asset('js/app.js') }}"></script>
</html>
