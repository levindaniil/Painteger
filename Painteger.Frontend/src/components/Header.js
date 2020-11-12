import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/painteger.svg';

function Header(props) {
    return (
        <header className='header'>
            <a href="/" className="header__logo">
                <img className='header__logo-image' src={logo} alt="painteger logo"/>
            </a>
            <nav className='header__nav'>
                <NavLink to="/create-an-art" className='header__nav-link'
                         activeStyle={{
                             color: '#18A0FB',
                             borderBottom: '3px solid #18A0FB'
                         }}>
                    Create an art
                </NavLink>
                <NavLink to="#" className='header__nav-link'>
                    Subscription
                </NavLink>
            </nav>
            <div className='header__buttons'>
                <button className='button button_login'>Log in</button>
                <button className='button'>Register</button>
            </div>
        </header>
    );
}

export default Header;
