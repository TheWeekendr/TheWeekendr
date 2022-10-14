import { useAuth0 } from "@auth0/auth0-react";

export const LogoutDelete = () => {
  const { logout } = useAuth0();
  logout({ returnTo: window.location.assign("/") });
};
