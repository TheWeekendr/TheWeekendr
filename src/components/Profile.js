import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "rsuite";
import { Popover, Whisper, Button } from 'rsuite';
import UpdateModal from "./UpdateModal";

const Profile = props => {
  const { user, isAuthenticated } = useAuth0();
  const triggerRef = React.createRef();
  const openProfile = () => triggerRef.current.open();
  const closeProfile = () => triggerRef.current.close();

  return (
    isAuthenticated && (
      <Whisper placement="bottomStart" trigger="hover" ref={triggerRef} speaker=
        {<Popover full>
          <section className="flex flex-col justify-between items-center">
            <img src={user.picture} alt={user.name} 
            className="mt-4 w-max h-max m-auto rounded-full object-cover drop-shadow-lg"/>
            <div className="my-1">
              <p className="text-lg text-slate-600 font-semibold">{user.name}</p>
              <p className="text-md text-slate-600">{user.email}</p>
            </div>
            <div className="mt-1 mb-4">
              <UpdateModal
                setUserDataState={props.setUserDataState}
                userData={props.userData}
                closeProfile={closeProfile}
                loading={props.loading}
                setLoading={props.setLoading}
              />
            </div>
          </section>
        </Popover>} enterable>
        <Button onClick={openProfile} appearance="subtle" size="lg">
          <div className="flex flex-row items-center text-lg">
            <Icon icon="user-circle-o" size="lg" className="mr-3 text-pink-400"/>
            <p>
              <span className="text-slate-100 italic">Welcome,</span>
              <span className="text-indigo-100 font-semibold font-sans"> {user.name}</span>
            </p>
          </div>
        </Button>
      </Whisper>
    )
  );
};

export default Profile;



