<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use App\Comment;
use App\User;
use App\Reply;

class BlogController extends Controller
{
    public function index() {
        $blogs = Blog::all();

        return view('blog.index', ['blogs' => $blogs]);
    }

    public function show($id) {
        $blog = Blog::find($id);

        $blogcomments = Comment::where('childid', $id)->where('parentid', '1')->get();
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

        return view('blog.show', ['blogs' => $blog, 'comments' => $blogcomments, 'replies' => $blogreplies]);
    }

    public function create() {
        return view('blog.create');
    }

    public function store() {
        $newblog = new Blog();
        $newblog->description = str_replace('"','%731%', request('description'));        
        $newblog->title = str_replace('"','%731%', request('title'));
        $newblog->authorid = str_replace('"','%731%', request('author'));
        
        $body = str_replace('"','%731%', request('body'));
        // $body2 = trim(preg_replace('/\s+/', '%732%', $body));
        // $body2 = str_replace(array("\r", "\n"),'%732%', $body);
        $body2 = str_replace("\r\n",'%732%', $body);
        $newblog->body = $body2;

        if(isset($_FILES["fileToUpload"])){
            if ($_FILES['fileToUpload']['error'] == UPLOAD_ERR_NO_FILE){
                return redirect('/blog/create?error103');
            }else{
                $file = $_FILES['fileToUpload'];
                $fileName = $_FILES["fileToUpload"]["name"];
                $fileTmpName = $_FILES["fileToUpload"]["tmp_name"];
                $fileSize = $_FILES["fileToUpload"]["size"];
                $fileError = $_FILES["fileToUpload"]["error"];
                $fileType = $_FILES["fileToUpload"]["type"];

                $fileExt = explode('.', $fileName);
                $fileActualExt = strtolower(end($fileExt));       

                $allowed = array('jpg', 'jpeg', 'png');

                if(in_array($fileActualExt, $allowed)){
                    if($fileError === 0){
                        if($fileSize < 3000000){    
                            $fileDestination = 'uploads/'.date('mdYhis', time()).'.'.$fileActualExt;                
                            move_uploaded_file($fileTmpName, $fileDestination);
                            $newblog->image = '/'.$fileDestination;
                        }else{
                            return redirect('/blog/create?error100');
                        }
                    }else{
                        return redirect('/blog/create?error101');
                    }
                }else{
                    return redirect('/blog/create?error102');
                }
            }            
        }
        
        $newblog->save();
        return redirect('/blog');
    }
}
