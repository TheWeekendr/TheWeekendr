import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "rsuite";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="flex flex-row items-center text-lg">
        <Icon icon="user-circle-o" size="lg" className="mr-3 text-pink-400"/>
        <p>
          <span className="text-slate-100 italic">Welcome,</span>
          <span className="text-indigo-100 font-semibold font-sans"> {user.name}</span>
        </p>
      </div>
    )
  );
};

export default Profile;