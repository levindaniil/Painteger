import React from 'react';
import logo from '../images/painteger.svg';

function Footer(props) {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt="painteger logo"/>
            <nav className='footer__nav'>
                <a href="#" className='footer__nav-link footer__nav-link_first'>Community</a>
                <a href="#" className='footer__nav-link'>Contact</a>
            </nav>
            <span className='footer__info'>© Painteger, 2020. Create your own art</span>
        </footer>
    );
}

export default Footer;
