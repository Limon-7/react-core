import React from "react";
import UserProfile from "../user-profile/UserProfile";
import UserList from "../UserList/UserList";

import "./user-container.css";
function UserContainer() {
  return (
    <div className="user-container">
      <UserList />
      <UserProfile name="Ms limon" email="limon@gmail.com" />
    </div>
  );
}

export default UserContainer;
