import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;
  return <h1>Welcome {user.userName}</h1>;
}

export default Profile;
