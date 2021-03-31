import React from 'react'
import { Card } from 'react-bootstrap'

function CardSectionA(prop) {
    const desUrl = `/blog/${prop.values.id}`

    const FormData = (data) => {
        const data1 = data.replace(/%731%/g, '"')
        const data2 = data1.replace(/%732%/g, '\n')
        return data2
    }

    return (
        <div className='col-9 col-sm-8 col-md-5 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prop.values.image} style={{height: 150}}/>
                <Card.Body>
                    <Card.Title>{FormData(prop.values.title)}</Card.Title>
                    <Card.Text style={{height: '60px'}}>{FormData(prop.values.description)}</Card.Text>
                    <a className='btn btn-primary' href={desUrl}>Read More</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardSectionA
