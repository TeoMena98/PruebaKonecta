<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function update() {
        return view('user.update');
    }

    public function store() {
        if(strlen(request('password')) > 7 && request('password')==request('password2')){        
            $user = Auth::User();
            $user->name = request('name');
            $user->password = Hash::make(request('password'));
            $user->email = request('email');
            $user->address = request('address');
            $user->city = request('city');
            $user->country = request('country');
            $user->zip = request('zip');
            $user->save();
            return redirect('/'); 
        }else{
            return redirect('/editaccount?edit=fail');
        } 
    }
}
