import React from 'react';
import SignUpForm from './SignUpForm';

function Hero(props) {
    return (
        <section className='hero'>
            <div className="hero__wrapper">
                <h1 className='hero__title'>Become an artist. Create your own art</h1>
                <button className='button'>Create an art</button>
            </div>

            <SignUpForm />
        </section>
    );
}

export default Hero;
