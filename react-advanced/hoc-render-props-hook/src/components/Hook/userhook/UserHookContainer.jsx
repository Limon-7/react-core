import React from "react";
import HookUserList from "./HookUserList";

import "./userhookContainer.css";
import UserHookProfile from "./UserHookProfile";
function UserHookContainer() {
  return (
    <div className="user-container">
      <HookUserList />
      <UserHookProfile />
    </div>
  );
}

export default UserHookContainer;
