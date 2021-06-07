import { useApolloClient } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../utils/consts';

const Navbar = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const client = useApolloClient();

  const logout = async () => {
    window.location.href = '/';
    localStorage.clear();
    await client.resetStore();
  };
  return (
    <>
      <div className="flex justify-between py-5 px-32">
        <div>
          <Link to="/dashboard">
            <img
              src="https://ignite-api.s3.us-east-2.amazonaws.com/merchant-logos/staging/bankonphone-logo.png"
              alt="logo"
              className="w-36 h-10"
            />
          </Link>
        </div>
        {authToken != null && typeof authToken !== 'undefined' ? (
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 p-2  h-10 w-40 text-white font-medium rounded outline-none focus:outline-none cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 p-2  h-10 w-40 text-white font-medium rounded outline-none focus:outline-none cursor-pointer"
          >
            Sign Up
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
