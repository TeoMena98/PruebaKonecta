import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function MyNavbar(prop) {
    const linkStyles = {
        fontSize: '20px'
    }

    const callSubmit = () => {
        document.getElementById('my_form').submit()
    }    

    var present = ''
    if (MyAuth) {
        let UserName = JSON.parse(userIn).name
        present = <NavDropdown title={UserName} id="basic-nav-dropdown" style={{fontSize: '20px', textColor: 'white'}}>
                    <NavDropdown.Item href="/user/edit" >Edit</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <form id='my_form' action="/logout" method='POST' >
                        <input type="hidden" name="_token" value={csrf_token} />
                        <NavDropdown.Item type='submit' onClick={callSubmit} >Logout</NavDropdown.Item>
                    </form>
                    </NavDropdown> 
    }else{
        present = <React.Fragment><Nav.Link href="/login" style={linkStyles}>Login</Nav.Link>
                    <Nav.Link href="/register" style={linkStyles}>Register</Nav.Link></React.Fragment>
    }

    return (
        <React.Fragment>
            <Navbar bg="dark" variant='dark' sticky='top' expand="lg">
            <div className='container'>
                <Navbar.Brand href="/" style={{fontSize: '20px'}}>Firts Steps</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">                
                <Nav className="mr-auto" activeKey={prop.location}>
                    <Nav.Link href="/blog" style={linkStyles}>Blog</Nav.Link>
                    <Nav.Link href="/gallery" style={linkStyles}>Gallery</Nav.Link>   
                    <Nav.Link href="/blog/create" style={linkStyles}>Create New Blog</Nav.Link>                    
                </Nav> 
                <Nav activeKey={prop.location}>
                    {present}                                    
                </Nav>
                
                </Navbar.Collapse>
            </div>
            </Navbar>
        </React.Fragment>
    )
}

export default MyNavbar
