import React from 'react';
import {NavLink} from 'react-router-dom';

function Error() {
    return (
        <div className='container container_error'>
            <NavLink to='/' className='return-link'>
                <svg className='return-link__icon' version="1.1" x="0px" y="0px"
                     viewBox="0 0 31.494 31.494">
                    <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
	                    c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
	                    c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                </svg>
                <span className='return-link__text'>Back to home page</span>
            </NavLink>
            <h1 className='title'>This page doesn't exist</h1>
            <p className='comment'>You can return to the&nbsp;
                <NavLink exact to='/' className='link link_error'>home page</NavLink> or&nbsp;
                <NavLink to='/create-an-art' className='link link_error'>create an art</NavLink></p>
        </div>
    );
}

export default Error;