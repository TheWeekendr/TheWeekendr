import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="pr-32 py-2" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;