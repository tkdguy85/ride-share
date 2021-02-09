import React from 'react'
import Footer from '../Footer'
import '../../App.css'
import '../../components/Hero.css'

function Payload() {
    return (
        <>
        <div className='hero-container'> 
            <video src="/img/iss.mp4" autoPlay loop muted></video>    
            <h3 className='pending'>Coming Soon</h3>
        </div>
        
        <Footer />
        </>
    )
}


export default Payload
