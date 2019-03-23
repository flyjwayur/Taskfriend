import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from '../Fields';
import {
  required,
  email,
  minLength2,
  minLength8,
  matchesPassword,
  asyncValidate
} from '../../../validation';
import './styles.scss';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="signUpForm" onSubmit={handleSubmit}>
        <Field
          name="name"
          component={customInput}
          type="text"
          label="Name"
          // placeholder="e.g., Hyesoo"
          validate={[required, minLength2]}
        />

        <Field
          name="email"
          component={customInput}
          type="email"
          label="Email"
          // placeholder="e.g., hyesoo@taskfriend.com"
          validate={[required, email]}
        />

        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          // placeholder="e.g., *******"
          validate={[required, minLength8]}
        />

        <Field
          name="confirmPassword"
          component={customInput}
          type="password"
          label="Confirm Password"
          // placeholder="e.g., *******"
          validate={[required, minLength8, matchesPassword]}
        />

        <Field name="usage" component={customSelect} label="Preferred Usage" />

        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Sign up to newsletter?"
        />

        <button className="signUpForm__submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

//Decorate Sign up form with name
SignUpForm = reduxForm({
  form: 'signUp',
  asyncValidate,
  asyncBlurFields: ['email']
})(SignUpForm);

export default SignUpForm;
