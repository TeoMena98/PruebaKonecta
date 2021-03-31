import React from 'react'
import {Form, Button, Image} from 'react-bootstrap'

function AddBlogForm() {

    const loadImg = (e) => {
        const file = e.target.files[0]
        console.log(file)
        if (file){
            if (file.type === 'image/jpeg') {
                if (file.size < 3000000){
                    const reader = new FileReader()
                    reader.addEventListener('load', function() {
                        document.getElementById('previewImg').setAttribute('src' , this.result)
                    })
                    reader.readAsDataURL(file)
                }else{
                    alert("The Image is to large. The Max Size allowed is 5MB")
                    document.getElementById('previewImg').setAttribute('src' , '/preview.png')
                }
            }else{
                alert("Please select an Image File")
                document.getElementById('previewImg').setAttribute('src' , '/preview.png')
            }            
        }else{
            alert("No Image selected")
            document.getElementById('previewImg').setAttribute('src' , '/preview.png')
        }
    }

    return (
        <React.Fragment>
            <Form method='POST' encType="multipart/form-data" action='/blog/create'>       
                <input type="hidden" name="_token" value={csrf_token} />
                <Form.Row className='justify-content-between m-0 p-0 '>
                    <Form.Group className='col-12 col-md-6 m-0 p-0'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name='title' type="text" placeholder='Enter title' required/>
                        <Form.Label className='mt-3'>Author</Form.Label>
                        <Form.Control name='author' type="text" placeholder="Enter author" required/>
                        
                    </Form.Group>   
                    <div className='col-12 col-md-6 text-center'>
                        <Image style={{height: '150px'}} id='previewImg' src='/preview.png' alt='Preview'></Image>                                                
                    </div>                        
                </Form.Row>

                <Form.Row className='justify-content-between'>
                    <Form.Group className='col-12 col-md-6 m-0 p-0'>
                        <Form.Label className='mt-3'>Description</Form.Label>
                        <Form.Control name='description' type='text' placeholder='Enter small description.' required/>
                    </Form.Group>
                    <Form.Group className='col-12 col-md-6 m-0 p-0 text-center'>
                        <Form.Label className='mt-3 col-9'>Select Image Max. 3MB</Form.Label>
                        <Form.File className='col-9' id="custom-file" label="Custom file input" 
                            onChange={loadImg} custom name='fileToUpload' required/>
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-0 p-0 mt-3'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control as='textarea' type='text' rows='7' name='body' required/>
                </Form.Row>

                <Button className='mt-3' variant="primary" type="submit" id='butF'>
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    )
}

export default AddBlogForm
