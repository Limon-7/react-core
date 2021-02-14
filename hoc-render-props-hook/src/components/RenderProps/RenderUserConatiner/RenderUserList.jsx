import React, { Component } from "react";

export class RenderUserList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container user-list">
        <h1>User List</h1>
        {data.map((user) => (
          <div className="post" key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default RenderUserList;
