import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  submit = values => {
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
