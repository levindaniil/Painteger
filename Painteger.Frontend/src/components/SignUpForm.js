import React from 'react';

function SignUpForm(props) {
    return (
        <form className='form form_signup'>
            <h2 className='form__title'>Sign up for a free account</h2>

            <div className="form__name">
                <input className='form__input form__input_first-name' type="text" name="first-name" id="first-name"
                       placeholder='First name'/>
                <input className='form__input form__input_last-name' type="text" name="last-name" id="last-name"
                       placeholder='Last name'/>
            </div>

            <input className='form__input form__input_email' type="text" name="email" id="email" placeholder='Email address'/>
            <input className='form__input form__input_password' type="password" name="password" id="password"
                   placeholder='Create password'/>

            <div className="form__actions">
                <a className='button form__submit' href='#'>Register</a>
                <a className='form__link' href='#'>Already have an account? Log in</a>
            </div>
        </form>
    );
}

export default SignUpForm;
