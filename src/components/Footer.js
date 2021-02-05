import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer-container">
                <section className="footer-sub">
                    <p className="footer-sub-heading">
                        Sign up for our launch updates.
                    </p>
                    <div className="input-areas">
                        <form>
                            <input 
                                type='email'
                                name='email'
                                placeholder='company email'
                                className='footer-input'
                                />
                                <Button buttonStyle='btn--outline'>Sign Up</Button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    
                    <div className="footer-link-wrap">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to='/'>Process</Link>
                            <Link to='/'>Pending Vendors</Link>
                            <Link to='/'>Sponsors</Link>
                            <Link to='/'>Careers</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Vendors</h2>
                            <Link to='/'>SpaceX</Link>
                            <Link to='/'>Blue Origin</Link>
                            <Link to='/'>Rocket Lab</Link>
                            <Link to='/'>Virgin Orbit</Link>
                        </div>
                    </div>
                    
                    <div className="footer-link-wrap">
                        <div className="footer-link-items">
                            <h2>Secret Items</h2>
                            <Link to='/'>Project 1</Link>
                            <Link to='/'>Project 2</Link>
                            <Link to='/'>Project 3</Link>
                            <Link to='/'>Project 4</Link>

                        </div>
                        <div className="footer-link-items">
                            <h2>Social Contacts</h2>
                            <Link to='/'>LinkedIn</Link>
                            <Link to='/'>Github</Link>
                            <Link to='/'>Resume</Link>
                            <Link to='/'>Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                        OrbiLaunch, Inc 
                        </Link>
                    </div>
                    <small className="rights">Established 2025</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link"
                            to='/https://www.linkedin.com/in/tkdguy85/'
                            target='_blank'
                            aria-label='Linked In'>
                            <i className="fa fa-linkedin"></i>
                        </Link>
                        <Link 
                            className="social-icon-link"
                            to='/https://github.com/tkdguy85/'
                            target='_blank'
                            aria-label='Github'>
                            <i className="fa fa-github-alt"></i>
                        </Link>
                        <Link 
                            className="social-icon-link"
                            to='/'
                            target='_blank'
                            aria-label='email'>
                            <i className="fa fa-google"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer