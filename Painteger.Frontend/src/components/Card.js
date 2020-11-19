import React from 'react';

function Card({img, title}) {
    return (
        <div className='card'>
            <div className='card__img' style={{
                width: '100%',
                height: '150px',
                background: `url(${img}) no-repeat`,
                backgroundSize: 'cover'
            }}>

            </div>
            <h3 className='card__title'>{title}</h3>
        </div>
    );
}

export default Card;
