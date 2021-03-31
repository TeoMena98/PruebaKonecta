<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Reply;

class ReplyController extends Controller
{
    public function index(){

    }

    public function store(){
        if (Auth::check()){
            $newreply = new Reply();
            $newreply->parentcommentid = request('commentid');
            $newreply->userid = Auth::User()->id; 

            $body = str_replace('"','%731%', request('commentbody'));
            $body2 = str_replace(array("\r", "\n"),'%732%', $body);
            $newreply->comment = $body2;  
            
            $newreply->save();
        }   
        $direction = '/';   
        if(request('parentid') === '1') {
            $direction = '/blog/'.request('childid').'#ComSection';
        }else if(request('parentid') === '2'){
            $direction = '/gallery';
        }
        return redirect($direction);
    }
}
