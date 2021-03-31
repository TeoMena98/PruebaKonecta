import React from 'react'
import {Carousel} from 'react-bootstrap'

function Corrousel() {
    return (
        <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://wallpaperaccess.com/full/782494.jpg" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://www.itl.cat/pngfile/big/35-354529_4k-final-fantasy-xv-windows-edition.jpg" alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images5.alphacoders.com/549/thumb-1920-549760.jpg" alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>            
        </React.Fragment>
    )
}

export default Corrousel
