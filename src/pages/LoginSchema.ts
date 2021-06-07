import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Field is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,20})/,
      'Password must be at least 6 characters and must contain a digit, a lowercase character and an uppercase character',
    ),
});
