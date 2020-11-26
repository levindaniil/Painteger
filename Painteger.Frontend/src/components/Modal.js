import React from 'react';
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

class Modal extends React.Component {
    render() {
        if (!this.props.showSignup && !this.props.showLogin) {
            return null;
        }
        if (this.props.showSignup) {
            return (
                <div className='modal'>
                    <SignUpForm title='Sign up' onClose={this.props.onCloseSignup} show={this.props.showSignup} modal={true}/>
                </div>
            );
        }
        if (this.props.showLogin) {
            return (
                <div className='modal'>
                    <LogInForm onClose={this.props.onCloseLogin} show={this.props.showLogin}/>
                </div>
            );
        }
    }
}

export default Modal;
