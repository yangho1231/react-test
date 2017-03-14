import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Login extends Component {
    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
              <div id="auth-login-email">
                <p>Email</p>
                <input size="20" type="text" />
              </div>
              <div id="auth-login-password">
                <p>Password</p>
                <input size="20" type="password" />
              </div>
              <div id="auth-login-button">
                <button type="submit">Log In</button>
              </div>
            </form>
        )
    }
}
