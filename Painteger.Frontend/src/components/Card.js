import React from 'react';

class Card extends React.Component {
    componentDidMount() {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            if (!card.classList.contains('card_area')) {
                card.addEventListener('click', () => {
                    let style = card.children[0].src;
                    this.props.setSelectedStyle([style]);
                    if (document.querySelector('.card_checked')) {
                        document.querySelector('.card_checked').classList.remove('card_checked');
                    }
                    card.classList.toggle('card_checked');
                });
            }
        });
    }

    render() {
        return (
            <div className='card'>
                <img className='card__img' src={this.props.img} alt={this.props.alt}
                     style={{
                    width: '100%',
                    height: '150px',
                    objectPosition: 'center'
                }}/>
                <div className='card__title'>
                    <h3 className='card__title-text'>{this.props.title}</h3>
                </div>
            </div>
        );
    }

}

export default Card;
