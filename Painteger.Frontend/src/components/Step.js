import React from 'react';

function Step({id, img, title, info}) {
    return (
        <div className='step'>
            <div className={`step__img step__img_${img}`}>

            </div>
            <div className="step__wrapper">
                <div className="step__header">
                    <div className="step__number">{id}.</div>
                    <h3 className='step__title'>{title}</h3>
                </div>
                <p className="step__info">{info}</p>
            </div>
        </div>
    );
}

export default Step;
