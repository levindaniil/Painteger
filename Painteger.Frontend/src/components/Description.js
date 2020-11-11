import React from 'react';
import Card from './Card';

function Description(props) {
    return (
        <section className='description'>
            <Card />
            <Card />
            <Card />
            <span className='deco'>or</span>
            <Card />

        </section>
    );
}

export default Description;
