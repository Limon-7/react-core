import React from "react";

function WithData(WrappedComponent, source) {
  class withData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    fetchData = async () => {
      try {
        const res = await fetch(source);
        const datas = await res.json();
        this.setState({ data: datas.slice(0, 4) });
      } catch (error) {
        console.log(error.message);
      }
    };
    componentDidMount() {
      // async way
      this.fetchData();
      //   fetch(source)
      //     .then((res) => {
      //       res.json();
      //     })
      //     .then((data) => this.setState({ data: data.slice(0, 3) }));
    }
    render() {
      return this.state.data.length > 0 ? (
        <WrappedComponent {...this.props} data={this.state.data} />
      ) : (
        <p>loading...</p>
      );
    }
  }
  return withData;
}

export default WithData;
