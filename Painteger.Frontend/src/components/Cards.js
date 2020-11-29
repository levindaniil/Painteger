import React from 'react';
import {styles} from "../data";
import Card from "./Card";
import add from "../assets/icons/add.svg";
import remove from "../assets/icons/trash.svg";

function Cards(props) {
    return (
        <React.Fragment>
            <div className='cards'>
                {styles.map(style => {
                    return <Card key={style.id} {...style} setSelectedStyle={props.setSelectedStyle}/>
                })}
                <div className='card card_area' onClick={props.styleInputClicked}>
                    <input className='card__upload hidden' ref={props.styleInputRef} type='file'
                           onChange={props.styleSelected}/>
                    <img className='card__icon' src={add} alt="plus in a circle"/>
                    <h3 className='card__title-text card__title-text_area'>{props.action}</h3>
                </div>
            </div>
            {
                props.selectedStyle.map((data, i) => (typeof data !== 'string') ?
                    <div className="file-status-bar" key={i}>
                        <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                        <span className="file-size">({props.fileSize(data.size)})</span>
                        {data.invalid && <span className='file-error-message'>({props.errorMessage})</span>}
                        <div className="file-remove" onClick={() => props.removeStyle(data.name)}>
                            <img className='file-remove-icon' src={remove} alt="remove icon"/>
                            Remove
                        </div>
                    </div> : ''
                )
            }
        </React.Fragment>
    );
}

export default Cards;
