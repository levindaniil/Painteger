import React from 'react';
import SignUpForm from './SignUpForm';

function Hero(props) {
    return (
        <section className='hero'>
            <div className="hero__wrapper">
                <h1 className='hero__title'>Become an artist. Create your own art</h1>
                <a href='/create-an-art' className='button button_hero'>Create an art</a>
            </div>

            <SignUpForm />
        </section>
    );
}

export default Hero;
