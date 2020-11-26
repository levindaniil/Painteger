import React from 'react';

class LogInForm extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        return (
            <div className='modal'>
                <form className='form form_login modal__window'>
                    <header className='form__header'>
                        <h2 className='form__title'>Log in</h2>
                        <button className='form__close' onClose={e => {
                            this.onClose(e);
                        }}>&times;</button>
                    </header>

                    <input className='form__input form__input_email' type="text" name="email" id="email" placeholder='Email address'/>
                    <input className='form__input form__input_password' type="password" name="password" id="password"
                           placeholder='Password'/>

                    <div className="form__actions">
                        <button className='button form__submit'>Log in</button>
                        <button className='form__link'>Not registered? Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LogInForm;
