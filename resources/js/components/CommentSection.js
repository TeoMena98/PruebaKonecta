import React from 'react'
import CommentForm from './CommentForm'
import CommentBox from './CommentBox'

function CommentSection(prop) {  
    
    const AllCommentsBox = prop.comments.map( xx => <CommentBox values={xx} replies={prop.replies} key={xx.id}/>)  

    return (
        <div className='container mt-5' id='ComSection'>
            <h3>Please Leave a Comment</h3>
            <CommentForm action='/comments/create'/> 
            {AllCommentsBox}       
        </div>
    )
}

export default CommentSection
