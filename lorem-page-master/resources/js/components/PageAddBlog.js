import React from 'react'
import MyNavbar from './MyNavbar'
import AddBlogForm from './AddBlogForm'

function PageAddBlog(prop) {
    return (
        <div>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container mt-5'>
                <AddBlogForm/>
            </div>
        </div>
    )
}

export default PageAddBlog
