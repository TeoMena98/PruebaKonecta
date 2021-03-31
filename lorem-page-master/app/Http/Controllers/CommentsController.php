<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Comment;

class CommentsController extends Controller
{
    public function store() {
        if (Auth::check()){
            $newcomment = new Comment();
            $newcomment->parentid = request('parentid');
            $newcomment->childid = request('childid');
            $newcomment->userid = Auth::User()->id; 

            $body = str_replace('"','%731%', request('commentbody'));
            $body2 = str_replace(array("\r", "\n"),'%732%', $body);
            $newcomment->comment = $body2;  
            
            $newcomment->save();
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
