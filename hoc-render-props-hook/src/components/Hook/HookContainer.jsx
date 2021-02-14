import React from "react";
import Cat from "./MouseTracker/MouseTracker";
import UserHookContainer from "./userhook/UserHookContainer";
function HookContainer() {
  throw Error;
  return (
    <div className="hookContainer">
      {/* <Cat /> */}
      <UserHookContainer />
    </div>
  );
}

export default HookContainer;
