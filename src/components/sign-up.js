import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join our commnity!</h1>
                <div className='form-group'>
                    <label className='control-label'>Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type='text'
                        name='username'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type='text'
                        name='email'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type='text'
                        name='password'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Password Confirmation</label>
                    <input
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        type='text'
                        name='passwordConfirmation'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Timezone</label>
                    <input
                        value={this.state.timezone}
                        onChange={this.onChange}
                        type='text'
                        name='timezone'
                        className='form-control'
                    />
                </div>                                                                
                <div className='form-group'>
                    <button className='btn btn-primary'>
                        Sign Up
                    </button>
                </div>


            </form>
        ) 
    }
}
export default SignUp;