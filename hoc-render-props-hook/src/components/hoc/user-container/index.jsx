import React from "react";
import UserProfile from "../user-profile/UserProfile";
import UserList from "../UserList/UserList";

import "./user-container.css";
function UserContainer() {
  return (
    <div className="user-container">
      <UserList />
      <UserProfile name="limon Malek" email="liibd7@gmail.com" />
    </div>
  );
}

export default UserContainer;
