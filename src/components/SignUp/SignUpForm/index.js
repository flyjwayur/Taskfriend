import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from '../Fields';
import { validate } from '../../../validation';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={customInput}
            type="text"
            label="Name"
            placeholder="e.g., Hyesoo"
          />
        </div>
        <div>
          <Field
            name="email"
            component={customInput}
            type="email"
            label="Email"
            placeholder="e.g., hyesoo@taskfriend.com"
          />
        </div>
        <div>
          <Field
            name="password"
            component={customInput}
            type="password"
            label="Password"
            placeholder="e.g., *******"
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

//Decorate Sign up form with name
SignUpForm = reduxForm({
  form: 'register',
  validate
})(SignUpForm);

export default SignUpForm;
