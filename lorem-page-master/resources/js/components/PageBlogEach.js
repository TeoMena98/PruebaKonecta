import React from 'react'
import MyNavbar from './MyNavbar'
import BlogContent from './BlogContent'
import CommentSection from './CommentSection';

function PageBlogEach() {  
    return (
        <div>
            <MyNavbar/>
            <BlogContent/>  

            <CommentSection comments={JSON.parse(jsonCommentstoShow)} replies={JSON.parse(jsonRepliestoShow)}/>
        </div>
    )
}
export default PageBlogEach
