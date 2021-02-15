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
    return this.props.children(this.state.data);
  }
}

export default RenderUser;

export const RenderUserWithFunctionalComponent = (props) => {
  const { url } = props;
  const [data, setData] = React.useState(null);

  const fetchUser = async (url) => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      setData(res.slice(1, 6));
    } catch (err) {
      console.log(err.message);
    }
  };
  React.useEffect(() => {
    fetchUser(url);
  }, [url]);
  return props.render(data);
};
