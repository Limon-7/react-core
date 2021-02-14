import React from "react";
import RenderUser from "./RenderUser";
import RenderUserList from "./RenderUserList";
import RenderUserProfile from "./RenderUserProfile";

function RenderUserConatiner(props) {
  return (
    <div className="user-container">
      <RenderUser url="https://jsonplaceholder.typicode.com/users">
        {(data) => <RenderUserList data={data} {...props} />}
      </RenderUser>
      <RenderUser url="https://jsonplaceholder.typicode.com/posts">
        {(data) => <RenderUserProfile data={data} {...props} />}
      </RenderUser>
    </div>
  );
}

export default RenderUserConatiner;
