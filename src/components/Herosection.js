import React from 'react'
import src from '../images/img-1.jpg'
import './herosection.css'

function Herosection() {
    return (
        <div className="hero-container">
            <img src={src}></img>
            <h1>Adventure Awaits</h1>
            <p>Go have fun</p>
            
        </div>
    )
}

export default Herosection
