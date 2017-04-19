import React, { Component } from 'react';

class PostBook extends Component {

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
              <div id="auth-login-email">
                <p>Book Title</p>
                <input 
                  size="20" 
                  type="text"
                  value={this.state.email}
                  onChange={this.onEmailChange} />
              </div>
              <div id="auth-login-password">
                <p>Pages</p>
                <input 
                  size="20" 
                  type="password" 
                  value={this.state.password}
                  onChange={this.onPasswordChange} />
              </div>
              <div id="auth-login-password">
                <p>Image</p>
                <input 
                  size="20" 
                  type="password" 
                  value={this.state.password}
                  onChange={this.onPasswordChange} />
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
                <button type="submit">Submit</button>
              </div>
            </form>
        );
    }
}

export default PostBook;