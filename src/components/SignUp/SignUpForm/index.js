import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from '../Fields';
import { required, email, minLength2, minLength8 } from '../../../validation';
import './styles.scss';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="signUpForm" onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={customInput}
            type="text"
            label="Name"
            // placeholder="e.g., Hyesoo"
            validate={[required, minLength2]}
          />
        </div>
        <div>
          <Field
            name="email"
            component={customInput}
            type="email"
            label="Email"
            // placeholder="e.g., hyesoo@taskfriend.com"
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name="password"
            component={customInput}
            type="password"
            label="Password"
            // placeholder="e.g., *******"
            validate={[required, minLength8]}
          />
        </div>
        <div>
          <Field name="usage" component={customSelect} label="Preferred Usage" />
        </div>
        <div>
          <Field
            name="newsletter"
            component={customInput}
            type="checkbox"
            label="Sign up to newsletter?"
          />
        </div>
        <button className="signUpForm__submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

//Decorate Sign up form with name
SignUpForm = reduxForm({
  form: 'register'
})(SignUpForm);

export default SignUpForm;
