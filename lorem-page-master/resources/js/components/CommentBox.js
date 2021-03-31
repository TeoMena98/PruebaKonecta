import React, {useState} from 'react'
import CommentForm from './CommentForm'
import CommentBox2 from './CommentBox2'

function CommentBox(prop) {

    //Just Style
    const CommStyle = {
        backgroundColor: 'white',
        border: '1px solid #e5e5e5',
        borderRadius: '5px'
    }

    //Prepare date time
    const formDate = prop.values.updated_at.split('T')

    //Prepare body format
    const FormData = (data) => {
        const data1 = data.replace(/%731%/g, '"')
        const data2 = data1.replace(/%732%/g, '\n')
        return data2
    }

    //State for the Reply Form
    const [makeReply, setMakeReply] = useState(false)
    const clickMakeReply = (e) => {
        setMakeReply(xx => !xx)
    }
    
    //Separe the needed replies from the all replyList
    var exactReplies = []
    for (var i = 0; i<prop.replies.length; i++){
        if (prop.replies[i].parentcommentid === prop.values.id){
            exactReplies.push(prop.replies[i])
        }
    }
    const RepliestoShow = exactReplies.map( xx => <CommentBox2 values={xx} key={xx.id} parentComment={prop.values.id}/>)  
    var boole = true
    if (exactReplies.length < 1){
        boole = false
    }
    
    //Change state and label of the buttom for showing the replies
    const [showReplies, setShowReplies] = useState(false)
    const [butLabel, setButLabel] = useState('▼Show Replies')
    const clickShowReplies = () => {
        setShowReplies(xx => !xx)
        if(!showReplies){setButLabel('▲ Hide Replies')}else{setButLabel('▼ Show Replies')}
    }

    const ButShowReply = <button className='btn btn-link m-0 p-0' onClick={clickShowReplies}>{butLabel} ({exactReplies.length})</button>

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

            {makeReply && <CommentForm action='/reply/create' commentid={prop.values.id}/>}

            {boole && ButShowReply}

            <div className='ml-5'>
                {showReplies && RepliestoShow}
            </div>            
        </React.Fragment>
    )
}

export default CommentBox
