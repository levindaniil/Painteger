import React from 'react';

function SignUpForm(props) {
    return (
        <form className='form form_signup'>
            <div className='form__wrapper'>
                <h2 className='form__title'>Sign up for a free account</h2>
                <input className='form__input form__first-name' type="text" name="first-name" id="first-name"
                       placeholder='First name'/>
                <input className='form__input form__last-name' type="text" name="last-name" id="last-name" placeholder='Last name'/>
                <input className='form__input form__email' type="text" name="email" id="email" placeholder='Email address'/>
                <input className='form__input form__password' type="password" name="password" id="password"
                       placeholder='Create password'/>
                <button className='button form__submit' type='submit'>Register</button>
                <a className='form__link' href='#'>Already have an account? Log in</a>
            </div>
        </form>
    );
}

export default SignUpForm;
