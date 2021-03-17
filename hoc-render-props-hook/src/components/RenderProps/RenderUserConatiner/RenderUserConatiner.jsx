import React from "react";
import RenderUser from "./RenderUser";
import { RenderUserWithFunctionalComponent } from "./RenderUser";
import RenderUserList from "./RenderUserList";
import RenderUserProfile from "./RenderUserProfile";

import "./RenderUserConatiner.css";
function RenderUserConatiner(props) {
  return (
    <div className="user-container">
      <RenderUser
        url="https://jsonplaceholder.typicode.com/users"
        children={(data) => <RenderUserList data={data} {...props} />}
      />
      {/* <RenderUser url="https://jsonplaceholder.typicode.com/users">
        {(data) => <RenderUserList data={data} {...props} />}
      </RenderUser> */}
      <RenderUserWithFunctionalComponent
        url="https://jsonplaceholder.typicode.com/posts"
        render={(data) =>
          data ? <RenderUserProfile data={data} {...props} /> : <p>loading</p>
        }
      />
      {/* If we use render we must return render in renderprops component.retun(props.render(data))  */}
      {/* If we use children we must return childen in renderprops component.return(props.children(data))  */}
      {/* <RenderUserWithFunctionalComponent url="https://jsonplaceholder.typicode.com/posts">
        {(data) =>
          data ? <RenderUserProfile data={data} {...props} /> : <p>loading</p>
        }
      </RenderUserWithFunctionalComponent> */}
    </div>
  );
}

export default RenderUserConatiner;
