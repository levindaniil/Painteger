import React from 'react';
import SignUpForm from './SignUpForm';
import {NavLink} from "react-router-dom";

function Hero(props) {
    return (
        <section className='hero'>
            <div className="hero__wrapper">
                <h1 className='hero__title'>Become an artist. Create your own art</h1>
                <NavLink to="/create-an-art" className='button button_hero'>
                    Create an art
                </NavLink>
            </div>

            <SignUpForm title='Sign up for a free account' show={true} modal={false}/>
        </section>
    );
}

export default Hero;
