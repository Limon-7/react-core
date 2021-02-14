import React, { Component } from "react";

export class RenderUser extends Component {
  state = {
    data: [],
  };
  fetchUser = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({ data: data.slice(0, 5) });
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
    this.fetchUser(this.props.url);
  }
  render() {
    console.log(this.props);
    return this.props.children(this.state.data);
  }
}

export default RenderUser;
