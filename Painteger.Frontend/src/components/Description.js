import React from 'react';
import Step from './Step';
import feature1 from '../assets/icons/feature1.svg';
import feature2 from '../assets/icons/feature2.svg';
import Feature from "./Feature";

const steps = [
    {
        id: 1,
        img: 'card1',
        title: 'Upload image',
        info: 'Choose and upload the picture that you wish to paint'
    },
    {
        id: 2,
        img: 'card2',
        title: 'Choose style or upload your own',
        info: 'Choose an artist in whose style you’d like to see your picture or upload your own style'
    },
    {
        id: 3,
        img: 'card3',
        title: 'Submit and wait',
        info: 'Wait for your freshly painted art to be ready'
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
        <section className='container'>
            <h2 className='title'>Make your photo look like famous artists’ painting</h2>
            <section className="steps">
                {steps.map((step, index) => {
                    return <Step key={index} {...step}/>
                })}
            </section>
            {/*<section className="extra">*/}
            {/*    <span className='deco'>or</span>*/}
            {/*    <div className='step step_single'>*/}
            {/*        <div className="step__wrapper">*/}
            {/*            <h3 className='step__title step__title_single'>Upload your style</h3>*/}
            {/*            <p className='step__info'>You can upload any image in which style you want to paint your*/}
            {/*                picture</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className='features'>
                {features.map(feature => {
                    return <Feature key={feature.id} {...feature}/>
                })}
            </section>
        </section>
    );
}

export default Description;
