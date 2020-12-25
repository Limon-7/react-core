import React, { Component } from "react";

export class RenderUserProfile extends Component {
  render() {
    const { data } = this.props;
    const name = "limon";
    const email = "liibd7@gmail.com";
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
}

export default RenderUserProfile;
