import React from 'react';

function Feature({img, title, info, alt}) {
    return (
        <div className='feature'>
            <img className='feature__img' src={img} alt={alt}/>
            <div className="feature__content">
                <h2 className="feature__title">{title}</h2>
                <p className="feature__info">{info}</p>
            </div>
        </div>
    );
}

export default Feature;
