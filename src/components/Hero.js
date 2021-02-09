import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'

function Hero() {
    return (
        <div>
            <div className="hero-container">
                <video src="/img/EarthSat.mp4" autoPlay loop muted></video>
                <h1>Your Ride to Space</h1>
                <p>Payload deliveries to space made simple</p>
              
                <div className="hero-btns">
                    <Button 
                    className="btns" 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        Begin
                    </Button>
                    <Button 
                    className="btns" 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        Orbital Reference <i className='fa fa-play-circle' />
                    </Button>  
                    <h2>The future is here! See below.</h2>
                </div>
                <div className="hero-arrow">⇣ ⇣ ⇣</div>
            </div>
        </div>
    )
}

export default Hero
