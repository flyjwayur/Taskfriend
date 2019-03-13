export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'password is required';
  } else if (values.password.length < 2) {
    errors.password = 'Username must be at least 2 characters';
  } else if (values.password.length > 10) {
    errors.password = 'Username it too long';
  }
  return errors;
};
