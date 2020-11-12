import React from 'react';

function Card({id, img, title, info, alt}) {
    return (
        <div className='card'>
            <img className='card__img' src={img} alt={alt}/>
            <div className="card__wrapper">
                <div className="card__header">
                    <div className="card__number">{id}.</div>
                    <h3 className='card__title'>{title}</h3>
                </div>
                <p className="card__info">{info}</p>
            </div>
        </div>
    );
}

export default Card;
