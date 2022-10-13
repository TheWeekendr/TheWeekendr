import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = props => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <button className="pr-14 py-2" onClick={() => handleLogin()}>
      Log In or Sign Up
    </button>
  );
};

export default Login;
