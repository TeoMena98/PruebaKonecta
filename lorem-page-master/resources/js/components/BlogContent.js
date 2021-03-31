import React from 'react'
import { Parallax } from "react-parallax";

function BlogContent() {
    const blog = JSON.parse(jsonBlogstoShow)
    const formDate = blog.updated_at.split('T')

    const FormData = (data) => {
        const data1 = data.replace(/%731%/g, '"')
        // const data2 = data1.replace(/%732%%732%/g, '\n')
        const data3 = data1.replace(/%732%/g, '\r\n')
        return data3
    }
    
    return (
        <div className='container mt-5'>
            <Parallax bgImage={blog.image} strength={500} style={{height: '300px'}}/>
            <h1 className='mt-5'>{FormData(blog.title)}</h1>
            <h5>Author: {FormData(blog.authorid)}</h5>
            <small>Last Update: {formDate[0]}</small>
            <p className='mt-1'>{FormData(blog.description)}</p>
            <p className='mt-4' style={{whiteSpace: 'pre-line'}}>{FormData(blog.body)}</p>
        </div>  
    )
}

export default BlogContent
