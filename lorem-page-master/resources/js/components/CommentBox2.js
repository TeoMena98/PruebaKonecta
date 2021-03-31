import React, {useState} from 'react'
import CommentForm from './CommentForm'

function CommentBox2(prop) {
    const CommStyle = {
        backgroundColor: 'white',
        border: '1px solid #e5e5e5',
        borderRadius: '5px'
    }

    const formDate = prop.values.updated_at.split('T')

    const FormData = (data) => {
        const data1 = data.replace(/%731%/g, '"')
        const data2 = data1.replace(/%732%/g, '\n')
        return data2
    }

    const [makeReply, setMakeReply] = useState(false)
    const clickMakeReply = (e) => {
        setMakeReply(xx => !xx)
    }    

    return (
        <React.Fragment>
            <div className='col-12 mt-1 mb-1' style={CommStyle}>
                <div className='ml-3 mr-3'> 
                    <div className='row align-items-end'>
                        <strong className='m-0 p-0'>{FormData(prop.values.userid)}</strong>
                        <small className='ml-2'>{formDate[0]}</small>
                    </div>
                    <div className='row'>
                        <p className='m-0 p-0'>{FormData(prop.values.comment)}</p>
                    </div>
                    <div className='row'>
                        <button className='btn btn-link m-0 p-0' onClick={clickMakeReply} style={{fontSize: '13px'}}>Reply</button>
                    </div> 
                </div>           
            </div>            
            {makeReply && <CommentForm action='/reply/create' commentid={prop.parentComment}/>}
        </React.Fragment>
    )
}

export default CommentBox2
