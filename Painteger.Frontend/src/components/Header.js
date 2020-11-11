import React from 'react';
import logo from '../images/painteger.svg';

function Header(props) {
    return (
        <header className='header'>
            <a href="/" className="header__logo">
                <img className='header__logo-image' src={logo} alt="painteger logo"/>
            </a>
            <nav className='header__nav'>
                <a href="/create-an-art" className='header__nav-link'>Create an art</a>
                <a href="#" className='header__nav-link'>Subscription</a>
            </nav>
            <div className='header__buttons'>
                <button className='button button_login'>Log in</button>
                <button className='button'>Register</button>
            </div>
        </header>
    );
}

export default Header;
