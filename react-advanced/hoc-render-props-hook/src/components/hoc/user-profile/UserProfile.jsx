import React from "react";
import PropTypes from "prop-types";
import WithData from "../WithData";

function UserProfile(props) {
  const { data, name, email } = props;
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

export default WithData(
  UserProfile,
  "https://jsonplaceholder.typicode.com/posts"
);
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
};
