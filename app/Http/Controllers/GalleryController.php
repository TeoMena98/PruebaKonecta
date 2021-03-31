<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\User;
use App\Reply;

class GalleryController extends Controller
{
    public function index() {

        $blogcomments = Comment::where('childid', 1)->where('parentid', '2')->get();
        if (is_null($blogcomments)){
            $blogcomments = [];
        }
        $replies2find = [];
        foreach ($blogcomments as $blogcomment){
            $id = $blogcomment->userid; 
            $blogcomment->userid = User::find($id)->name;
            array_push($replies2find, $blogcomment->id);
        }

        $blogreplies = Reply::whereIn('parentcommentid', $replies2find)->get();
        if (is_null($blogreplies)){
            $blogreplies = [];
        }
        foreach ($blogreplies as $blogreply){
            $id = $blogreply->userid; 
            $blogreply->userid = User::find($id)->name;
        }

        return view('gallery.index', ['comments' => $blogcomments, 'replies' => $blogreplies]);

    }
}
