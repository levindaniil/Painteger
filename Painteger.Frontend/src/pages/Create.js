import React from 'react';
import {NavLink} from 'react-router-dom';
import {styles} from '../data.js';
import Card from "../components/Card";
import add from '../images/add.svg';

function Create(props) {
    return (
        <main className='container'>
            <NavLink to='/' className='return-link'>Back to home page</NavLink>
            <h1 className='title'>Create an art</h1>
            <p className='comment'>Just a few steps to create a piece of art:</p>
            <section className='step step_create'>
                <div className="step__header step__header_create">
                    <div className="step__number">1.</div>
                    <h3 className='step__title'>Upload image</h3>
                </div>
                <div className='area'>Click here or drag the image to this box to upload it</div>
                <button className='button'>Upload</button>
            </section>
            <section className='step step_create'>
                <div className="step__header step__header_create">
                    <div className="step__number">2.</div>
                    <h3 className='step__title'>Choose style</h3>
                </div>
                <div className='cards'>
                    {styles.map(style => {
                        return <Card key={style.id} {...style}/>
                    })}
                    <div className='card card_area'>
                        <img className='card__icon' src={add} alt="plus in a circle"/>
                        <h3 className='card__title card__title_area'>Choose style</h3>
                    </div>
                </div>
            </section>
            <section className='step step_create'>
                <div className='step__header step__header_create'>
                    <div className="step__number">3.</div>
                    <h3 className='step__title'>Submit and wait</h3>
                </div>
                <div className='step__content'>
                    <div className='step__buttons'>
                        <button className='button'>Get a picture</button>
                        <button className='button button_disabled'>Download</button>
                    </div>
                    <div className='area area_result'>Your art will be displayed here</div>
                </div>
            </section>
        </main>
    );
}

export default Create;
