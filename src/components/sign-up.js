import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpUser } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router'; 
class SignUp extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
      event.preventDefault();

    this.props.signUpUser(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { username, email, password, passwordConfirmation }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${username.touched && username.invalid ? 'has-danger' : ''}`}>
          <label>Username</label>
          <input type="text" className="form-control" {...username} />
          <div className="text-help">
            {username.touched ? username.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>Email</label>
          <input type="text" className="form-control" {...email} />
          <div className="text-help">
            {email.touched ? email.error : ''}
          </div>
        </div>

        <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
          <label>Password</label>
          <input type='password' className="form-control" {...password} />
          <div className="text-help">
            {password.touched ? password.error : ''}
          </div>
        </div>

        <div className={`form-group ${passwordConfirmation.touched && passwordConfirmation.invalid ? 'has-danger' : ''}`}>
          <label>Password Confirm</label>
          <input type='password' className="form-control" {...passwordConfirmation} />
          <div className="text-help">
            {passwordConfirmation.touched ? passwordConfirmation.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Enter a username';
  }
  if (!values.email) {
    errors.email = 'Enter email';
  }
  if(!values.password) {
    errors.password = 'Enter some password';
  }
  if(!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Enter some passwordConfirmation';
  }
  if(values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password do not match';
  }

  return errors;
}
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['username', 'email', 'password', 'passwordConfirmation'],
  validate
}, null, { signUpUser })(SignUp);
