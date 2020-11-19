import React from 'react';
import logo from '../assets/icons/painteger.svg';

function Footer(props) {
    return (
        <footer className='footer'>
            <a href="/" className="footer__logo">
                <img className='footer__logo-image' src={logo} alt="painteger logo"/>
            </a>
            <nav className='footer__nav'>
                <a href="#" className='footer__nav-link footer__nav-link_first'>Community</a>
                <a href="#" className='footer__nav-link'>Contact</a>
            </nav>
            <p className='footer__info'>© Painteger, 2020. Create your own art</p>
        </footer>
    );
}

export default Footer;
