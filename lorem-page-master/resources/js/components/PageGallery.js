import React from 'react'
import MyNavbar from './MyNavbar';
import Corrousel from './Corrousel'
import CommentSection from './CommentSection';

function PageGallery(prop) {   

    return (
        <div>            
            <MyNavbar location={prop.location.pathname}/>    
                 
            <div className='container mt-3'>
                <Corrousel/>
                <CommentSection comments={JSON.parse(jsonCommentstoShow)} replies={JSON.parse(jsonRepliestoShow)}/>
            </div>            
        </div>
    )
}

export default PageGallery
