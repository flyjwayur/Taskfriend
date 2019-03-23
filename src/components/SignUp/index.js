import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  submit = values => {
    if (['hyesoo', 'mario', 'moomin'].includes(values.name)) {
      throw new SubmissionError({
        name: 'Name already exists'
      });
    }
    window.alert(JSON.stringify(values, null, 4));
  };

  getInitialValue() {
    return {
      newsletter: 'true'
    };
  }
  render() {
    return <SignUpForm onSubmit={this.submit} initialValues={this.getInitialValue()} />;
  }
}

export default SignUp;
