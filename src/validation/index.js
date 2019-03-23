// 1st way) Synchronous validation in Redux form
export const required = value => (value ? undefined : 'Required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);
export const minLength8 = minLength(8);

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';
// 2nd way) Synchronous validation in Redux form
// export const validate = values => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'Name is required';
//   }

//   if (!values.email) {
//     errors.email = 'Email is required';
//   }

//   if (!values.password) {
//     errors.password = 'password is required';
//   } else if (values.password.length < 2) {
//     errors.password = 'Username must be at least 2 characters';
//   } else if (values.password.length > 10) {
//     errors.password = 'Username it too long';
//   }
//   return errors;
// };
