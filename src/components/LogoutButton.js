import React from "react";
import { Button } from 'rsuite';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button appearance="subtle" size="md" onClick={() => logout({ returnTo: window.location.origin })}>
      Close
    </Button>
  );
};

export default LogoutButton;