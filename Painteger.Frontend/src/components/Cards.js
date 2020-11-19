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
            <div className='card card_area'>
                <img className='card__icon' src={add} alt="plus in a circle"/>
                <h3 className='card__title card__title_area'>{props.action}</h3>
            </div>
        </div>
    );
}

export default Cards;
