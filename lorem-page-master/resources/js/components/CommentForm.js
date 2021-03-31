import React, {useContext} from 'react'
import { Form } from 'react-bootstrap'

function CommentForm(prop) {    
    var pleaseRegister = ''
    if(!MyAuth){
        pleaseRegister = <div><strong style={{fontSize: '20px'}}>You have to be Log to leave a comment.</strong>
                            <a className='btn btn-primary mb-1 ml-3' href='/login'>Login/Register</a></div>
              
    }

    const change = (e) => {
        if(!MyAuth){
            e.target.value = ''
            document.getElementById('subBut').setAttribute('disabled', true)
        }else{
            if(e.target.value.length < 5){
                document.getElementById('subBut').setAttribute('disabled', true)
            }else{
                document.getElementById('subBut').removeAttribute('disabled')
            }
        }
    }
    
    return (
        <div>
            <Form method='POST' action={prop.action}>
                <input type="hidden" name="_token" value={csrf_token}/>
                <input type='hidden' name='childid' value={ChildID}/>
                <input type='hidden' name='parentid' value={ParentID}/>
                <input type='hidden' name='commentid' value={prop.commentid}/>
                {pleaseRegister}
                <Form.Group>
                    <Form.Control onChange={change} as='textarea' row='3' placeholder='Write your comment' id='areaComm' required name='commentbody'/>
                </Form.Group>
                <Form.Group style={{textAlign: 'left'}} className='align-content-start justify-content-start'>
                    <button id='subBut' className='btn btn-primary' align='left' type='submit'>Submit</button>
                </Form.Group>  
            </Form>
        </div>
    )
}

export default CommentForm
