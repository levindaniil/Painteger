import React from 'react';
import {styles} from "../data";
import Card from "./Card";
import add from "../assets/icons/add.svg";

function Cards(props) {
    return (
        <div className='cards'>
            {styles.map(style => {
                return <Card key={style.id} {...style}/>
            })}
            <label className='card card_area'>
                <input className='card__upload hidden' type='file'/>
                <img className='card__icon' src={add} alt="plus in a circle"/>
                <h3 className='card__title-text card__title-text_area'>{props.action}</h3>
            </label>
        </div>
    );
}

export default Cards;
