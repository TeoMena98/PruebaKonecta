import React from 'react'
import MyNavbar from './MyNavbar';
import CardSection from './CardSection';

function PageBlog(prop) {
    return (
        <React.Fragment>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container'>
                <div className='row mt-5 justify-content-center'>
                    <h1 className='col-12'>Blog Page</h1>
                    <p className='col-12'>Mollit anim aliqua in ea et sunt qui in ullamco. Adipisicing nulla quis deserunt magna deserunt excepteur deserunt aute qui reprehenderit minim. Dolore anim aute velit elit laborum eiusmod aliquip quis sunt officia aliquip commodo cupidatat.</p>
                </div>
                <CardSection/>
            </div>          
        </React.Fragment>
    )
}

export default PageBlog
