@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Status</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <h4>You are logged in!</h4>
                    <a class='btn btn-primary mt-2' href='/'>Go Main</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
