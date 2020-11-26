import React from 'react';

class SignUpForm extends React.Component {
    componentDidMount() {
        if (!this.props.modal) {
            document.querySelector('.form__close_hero').classList.add('hidden');
        } else {
            document.querySelector('.modal .form_signup').classList.add('modal__window');
        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        return (
            <form className='form form_signup'>
                <header className='form__header'>
                    <h2 className='form__title'>{this.props.title}</h2>
                    <button className='form__close form__close_hero' onClose={e => {
                        this.onClose(e);
                    }}>&times;</button>
                </header>

                <div className="form__name">
                    <input className='form__input form__input_first-name' type="text" name="first-name" id="first-name"
                           placeholder='First name'/>
                    <input className='form__input form__input_last-name' type="text" name="last-name" id="last-name"
                           placeholder='Last name'/>
                </div>

                <input className='form__input form__input_email' type="text" name="email" id="email"
                       placeholder='Email address'/>
                <input className='form__input form__input_password' type="password" name="password" id="password"
                       placeholder='Create password'/>

                <div className="form__actions">
                    <button className='button form__submit'>Sign up</button>
                    <button className='form__link'>Have an account? Log in</button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;
