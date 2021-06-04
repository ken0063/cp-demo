import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { LOGIN_MUTATION } from '../providers/queries';
import { LoginSAchema } from './LoginSAchema';
import { useHistory } from 'react-router';

const LoginPage: React.FC = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState();
  const history = useHistory();

  const [login, { loading, data }] = useMutation(LOGIN_MUTATION, {
    async onCompleted() {
      setUser(data);
      localStorage.setItem('cp-user', data);
      history.push('/dash-board');
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem('cp-user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          if (user) {
            history.push('/dash-board');
          } else {
            await login({
              variables: {
                input: {
                  email: values.email,
                  password: values.password,
                  clientId: 'cjww48x2b0yu0084243ybktlj',
                },
              },
            });
          }
        } catch (error) {
          setError(error);
        }
      }}
      validationSchema={LoginSAchema}
    >
      <>
        {loading ? (
          'Loading...'
        ) : (
          <Form>
            {error ? <p>{error}</p> : ''}
            <Field type="email" name="email" placeholder="Enter Your Email" />

            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />

            <button type="submit">Login</button>
          </Form>
        )}
      </>
    </Formik>
  );
};

export default LoginPage;
