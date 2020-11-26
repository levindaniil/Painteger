import React from 'react';

class Card extends React.Component {
    componentDidMount() {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (document.querySelector('.card_checked')) {
                    document.querySelector('.card_checked').classList.remove('card_checked');
                }
                card.classList.toggle('card_checked');
            });
        });
    }

    render() {
        return (
            <div className='card'>
                <div className='card__img' style={{
                    width: '100%',
                    height: '150px',
                    backgroundImage: `url(${this.props.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}> </div>
                <div className='card__title'>
                    <h3 className='card__title-text'>{this.props.title}</h3>
                </div>
            </div>
        );
    }

}

export default Card;
