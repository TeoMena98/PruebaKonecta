import React from 'react'
import { Parallax } from "react-parallax";

function Wallpaper(props) {

    const Myh1Style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontFamily: 'Cosmic Sans MS, Cosmic Sans',
        fontSize: '65px'
    }

    return (
        <div>
            <Parallax bgImage={'/wall1.jpg'} strength={500}>
                <div style={{height: '100vh'}}>
                    <h1 style={Myh1Style} className='text-white'>{props.label}</h1>
                </div>
            </Parallax>       
        </div>
    )
}

export default Wallpaper
