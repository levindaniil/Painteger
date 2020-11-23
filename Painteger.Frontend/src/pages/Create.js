import React from 'react';
import {NavLink} from 'react-router-dom';
import Cards from "../components/Cards";

function Create(props) {
    return (
        <div className='container'>
            <NavLink to='/' className='return-link'>
                <svg className='return-link__icon' version="1.1" x="0px" y="0px"
                     viewBox="0 0 31.494 31.494">
                    <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
	                    c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
	                    c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                </svg>
                <span className='return-link__text'>Back to home page</span>
            </NavLink>
            <h1 className='title'>Create an art</h1>
            <p className='comment'>Just a few steps to create a piece of art:</p>
            <section className='step step_create'>
                <div className="step__header step__header_create">
                    <div className="step__number">1.</div>
                    <h3 className='step__title step__title_create'>Upload image</h3>
                </div>
                <div className='area'>Click here or drag the image to this box to upload it</div>
                <button className='button button_center'>Upload</button>
            </section>
            <section className='step step_create'>
                <div className="step__header step__header_create">
                    <div className="step__number">2.</div>
                    <h3 className='step__title step__title_create'>Choose style</h3>
                </div>
                <Cards action={'Upload style'}/>
            </section>
            <section className='step step_create'>
                <div className='step__header step__header_create'>
                    <div className="step__number">3.</div>
                    <h3 className='step__title step__title_create'>Submit and wait</h3>
                </div>
                <div className='step__result'>
                    <div className='step__buttons'>
                        <button className='button button_create'>Get a picture</button>
                        <button className='button button_create button_disabled'>Download</button>
                    </div>
                    <div className='area area_result'>Your art will be displayed here</div>
                </div>
            </section>
        </div>
    );
}

export default Create;
