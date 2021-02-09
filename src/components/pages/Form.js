import React from 'react'
import Footer from '../Footer'
import '../../App.css'
import '../../components/Hero.css'

function Form() {
    return (
        <>
            <div className='hero-container'> 
                <video src="/img/orbit.mp4" autoPlay loop muted></video>    
                <h3 className='pending'>Coming soon, thanks for visiting.</h3>
            </div>
            
            <Footer />
        </>
    )
}

export default Form
