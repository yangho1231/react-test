import React, { Component } from 'react';
import SignUpForm from './signUpForm';
import Menu from '../menu/menu';
class SignUp extends Component {
    render() {
        return (
            <div>
                <Menu />
                <SignUpForm />
            </div>
        )
    }
}
export default SignUp;