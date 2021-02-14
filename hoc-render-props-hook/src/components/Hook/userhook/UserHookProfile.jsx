import React from "react";
import UserFetch from "./UserFetch";

function UserHookProfile() {
  const { data, name, email } = UserFetch(
    "https://jsonplaceholder.typicode.com/posts",
    "limon",
    "liibd7@gmail.com"
  );
  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{email}</h2>
      Post:
      {data.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default UserHookProfile;
