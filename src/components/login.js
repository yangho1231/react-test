import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
      this.onFormSubmit = this.onSubmit.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onEmailChange(event) {
      this.setState({ email: event.target.value });
    }
    onPasswordChange(event) {
      this.setState({ password: event.target.value });
    }

    static contextTypes = {
      router: PropTypes.object
    };

    onSubmit(event) {
      event.preventDefault();
      this.props.login(this.state)
        .then((res) => {
        if(res.payload.data === 'Username or Password is wrong') alert(res.payload.data);
        else this.context.router.push('/');
      }) 
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
              <div id="auth-login-email">
                <p>Email</p>
                <input 
                  size="20" 
                  type="text"
                  value={this.state.email}
                  onChange={this.onEmailChange} />
              </div>
              <div id="auth-login-password">
                <p>Password</p>
                <input 
                  size="20" 
                  type="password" 
                  value={this.state.password}
                  onChange={this.onPasswordChange} />
              </div>
              <div id="auth-login-button">
                <button type="submit">Log In</button>
              </div>
            </form>
        )
    }
}
export default connect(null, { login })(Login);