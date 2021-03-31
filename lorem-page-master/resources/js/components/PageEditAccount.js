import React from 'react'
import MyNavbar from './MyNavbar'
import FormRegister from './FormData'

function PageEditAccount(prop) {
    
    return (
        <React.Fragment>
            <MyNavbar location={prop.location.pathname}/>
            <div className='container mt-5'>
                <FormRegister />
            </div>
        </React.Fragment>
    )
}

export default PageEditAccount
