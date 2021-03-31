import React from 'react'
import CardSectionA from './CardSectionA'

function CardSection() {

    const allList = JSON.parse(blogstoShow)
    const toShow = allList.map( xx => <CardSectionA values={xx} key={xx.id}/>)

    return (
        <div className='container'>
            <div className='row justify-content-around'>
                {toShow}
            </div>
        </div>
    )
}

export default CardSection
