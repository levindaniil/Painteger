import React from 'react';

function Feature(props) { // TODO: добавить картинки в папку и указать пути + класс
    return (
        <div className={'feature-card'}>
            <img src="../images" alt=""/>
            <h2 className="card-title">{}</h2>
            <p className="card-info">{}</p>
        </div>
    );
}

export default Feature;
