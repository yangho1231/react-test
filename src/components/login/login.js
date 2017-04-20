import React, { Component } from 'react';
import LoginForm from './loginForm';
import Menu from '../menu/menu';
class Login extends Component {
    render() {
        return (
            <div>
                <Menu />
                <LoginForm />
            </div>
        )
    }
}
export default Login;