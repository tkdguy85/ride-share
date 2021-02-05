import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './NavBar.css'


function NavBar() {
    const [ click, setClick ] = useState(false);
    const [button, setButton] = useState(true);  
    
    const closeMobileMenu = () => setClick(false);
    const iconClick = () => setClick(!click);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
       showButton();
    }, []);

    window.addEventListener('resize', showButton);

   
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    OptiLaunch<i className="fa fa-space-shuttle" />
                    </Link>
                    
                    <div className="menu-icon" onClick={iconClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />   
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>                     
                        <li className='nav-item'>
                            <Link to='/Rockets' className='nav-links' onClick={closeMobileMenu}>
                                Rocket
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Specs' className='nav-links' onClick={closeMobileMenu}>
                                Payload
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/form' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Launch
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>APPLY NOW</Button>}

                </div>
            </nav>   
        </>
    );
}

export default NavBar
