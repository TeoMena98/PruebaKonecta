import React from 'react'
import {Form, Button} from 'react-bootstrap'

function FormData() {

    let myUserIn = JSON.parse(userIn)

    const checkPass = () =>{
        let pas1Val = document.getElementById('pas1').value
        let pas2Val = document.getElementById('pas2').value
        
        if(pas1Val.length < 8){
            document.getElementById('pas1').classList.add('is-invalid')
            document.getElementById('butF').setAttribute('disabled', true)
        }else{
            document.getElementById('pas1').classList.remove('is-invalid')
            if (pas1Val === pas2Val){
                document.getElementById('pas2').classList.remove('is-invalid')
                document.getElementById('butF').removeAttribute('disabled')
            }else{
                document.getElementById('pas2').classList.add('is-invalid')
                document.getElementById('butF').setAttribute('disabled', true)
            }
        }        
    }    

    return (
        <React.Fragment>
            <Form method='POST' action='/user/edit'>       
                <input type="hidden" name="_token" value={csrf_token} />
                <Form.Row>
                    <Form.Group className='col-12 col-md-6' controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder='Enter name' defaultValue={myUserIn.name} autoComplete='given-name' required/>
                    </Form.Group>
                    <Form.Group className='col-12 col-md-6' controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" defaultValue={myUserIn.email} required/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className='col-12 col-md-6' controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" onChange={checkPass} id='pas1' required/>
                    </Form.Group>
                    
                    <Form.Group className='col-12 col-md-6' controlId="formGridPassword2">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control className='form-control' name='password2' type="password" onChange={checkPass} id='pas2' required/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='text' name='address' defaultValue={myUserIn.address} autoComplete='address-line1'/>
                </Form.Group>

                <Form.Row>
                    <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name='city' defaultValue={myUserIn.city} autoComplete='address-level1'/>
                    </Form.Group>

                    <Form.Group className='col-12 col-md-6' controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name='country' defaultValue={myUserIn.country} autoComplete='country'/>
                    </Form.Group>

                    <Form.Group className='col-12 col-md-6' controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" autoComplete='postal-code' defaultValue={myUserIn.zip} name='zip'/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" id='butF'>
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    )
}

export default FormData
