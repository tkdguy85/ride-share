import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import '../../components/Hero.css'

function Rocket() {
    return (
        <>
        <div className='hero-container'> 
            <h3 className='pending'>Coming Soon</h3>
            <img src="/img/dragon3.jpg" alt="SpaceX Capsule" />            
        </div>
        
        <Footer />
        </>
    )
}

export default Rocket
