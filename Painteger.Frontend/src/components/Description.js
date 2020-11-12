import React from 'react';
import Card from './Card';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import feature1 from '../images/feature1.svg';
import feature2 from '../images/feature2.svg';
import Feature from "./Feature";

const cards = [
    {
        id: 1,
        img: card1,
        title: 'Upload image',
        info: 'Choose and upload the picture that you wish to paint',
        alt: 'picture before stylization'
    },
    {
        id: 2,
        img: card2,
        title: 'Choose style',
        info: 'Choose an artist in whose style you’d like to see your picture',
        alt: 'style for the picture'
    },
    {
        id: 3,
        img: card3,
        title: 'Submit and wait',
        info: 'Wait for your freshly painted art to be ready',
        alt: 'stylized picture'
    }
];

const features = [
    {
        id: 1,
        img: feature1,
        title: 'Save your art',
        info: 'The picture is automatically saved to your profile if you’re logged in. You can download it to your device as well',
        alt: 'floppy disk'
    },
    {
        id: 2,
        img: feature2,
        title: 'Share your art',
        info: 'Show your friends what you’ve done with your pictures',
        alt: 'sharing icon'
    }
];

function Description(props) {
    return (
        <section className='description'>
            <h2 className='title'>Make your photo look like famous artists’ painting</h2>
            <section className="cards">
                {cards.map((card, index) => {
                    return <Card key={index} {...card}/>
                })}
            </section>
            <section className="extra">
                <span className='deco'>or</span>
                <div className='card card_single'>
                    <div className="card__wrapper">
                        <h3 className='card__title card__title_single'>Upload your style</h3>
                        <p className='card__info'>You can upload any image in which style you want to paint your
                            picture</p>
                    </div>
                </div>
            </section>
            <section className='features'>
                {features.map(feature => {
                    return <Feature key={feature.id} {...feature}/>
                })}
            </section>
        </section>
    );
}

export default Description;
