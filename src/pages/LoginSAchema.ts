import * as yup from 'yup';

export const LoginSAchema = yup.object().shape({
  email: yup.string().email().required('Enter valid email'),
  password: yup.string().required('Enter valid password'),
});
