import React from 'react'

function Part3A(prop) {

    let textA = <div className='col-lg-6 m-0 pl-5 pr-5 align-self-center'><h1>{prop.values.label}</h1><p>{prop.values.body}</p></div>
    let imgA = <img className='col-lg-6 m-0 p-0' src={prop.values.src} alt='test wall'/>
      
    var P1 = imgA
    var P2 = textA

    if(prop.values.id % 2 === 0){
        P1 = textA
        P2 = imgA
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {P1}{P2}                
            </div>
        </div>
    )
}

export default Part3A
