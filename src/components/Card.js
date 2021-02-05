import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className='cards'>
            <h1>Select a launch platform that suits your payloads schematics</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        
                        <CardItem 
                            src='/img/sxlogo.png'
                            text='SpaceX is currently the leader in affordable satellite deployment.'
                            label='SpaceX'
                            path='/Rockets'
                        />

                        <CardItem 
                            src='/img/bologo.jpg'
                            text='Experimental rocket system.'
                            label='Blue Origin'
                            path='/Rockets'
                        />

                        <CardItem 
                            src='/img/roklogo.png'
                            text='Affordable, light payload launch system.'
                            label='Rocket Lab'
                            path='/Rockets'
                        />

                        <CardItem 
                            src='/img/vologo.png'
                            text='Lowest cost launch system with multiple launch windows.'
                            label='Virgin Orbit'
                            path='/Rockets'
                        />
                    </ul>
                </div>
            </div>
            <h1>Other options coming soon!</h1>
        </div>
    )
}

export default Card

