import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { LOGIN_MUTATION } from '../providers/queries';
import { LoginSAchema } from './LoginSAchema';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../utils/consts';
import Loaders from '../component/Loaders';

interface LoginDetails {
  email: string;
  password: string;
  clientId: string;
}
interface LoginProps {
  token: string;
  user: {
    id: string;
    status: string;
  };
}

const LoginPage: React.FC = () => {
  const [error, setError] = useState('');
  const history = useHistory();

  const [login, { loading }] = useMutation<
    { login: LoginProps },
    { input: LoginDetails }
  >(LOGIN_MUTATION, {
    async onCompleted({ login }) {
      localStorage.setItem(AUTH_TOKEN, login.token);
      history.push('/dash-board');
      window.location.reload();
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    if (authToken != null && typeof authToken !== 'undefined') {
      history.push('/dash-board');
    } else {
      history.push('/');
    }
  }, [history]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          await login({
            variables: {
              input: {
                email: values.email,
                password: values.password,
                clientId: 'ckapd9fs5090a07615qv6wcdy',
              },
            },
          });
        } catch (error) {
          setError(error);
        }
      }}
      validationSchema={LoginSAchema}
    >
      <div className="flex flex-col h-screen w-full max-w-screen-3xl bg-gray-700 items-center justify-center">
        {loading ? (
          <Loaders />
        ) : (
          <Form className="flex flex-col justify-evenly items-center h-3/5 w-1/3 p-4 bg-white rounded-lg shadow-md">
            <span className="font-mono text-2xl text-center font-medium tracking-tighter">
              Sign in to your account
            </span>
            {error ? <p>{error}</p> : ''}
            <Field
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border-b-2 border-gray-400 
               placeholder-gray-400 w-3/4 py-2
              outline-none"
            />

            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border-b-2 border-gray-400  
               placeholder-gray-400 w-3/4 py-2
              outline-none"
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 p-2 w-40 text-white font-medium rounded outline-none focus:outline-none cursor-pointer"
            >
              Login
            </button>
          </Form>
        )}
      </div>
    </Formik>
  );
};

export default LoginPage;
