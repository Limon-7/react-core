import React, { createRef } from "react";

function WithData(WrappedComponent, source) {
  class withData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
      this.isFetching = createRef();
    }
    fetchData = async () => {
      try {
        const res = await fetch(source);
        const datas = await res.json();
        console.log(
          "this.isFetching.current-in fetch:",
          this.isFetching.current
        );
        setTimeout(() => {
          if (!this.isFetching.current) {
            this.setState({ data: datas.slice(0, 4) });
          }
        }, 1000);
      } catch (error) {
        console.log(error.message);
      }
    };
    componentDidMount() {
      this.fetchData();
    }
    componentWillUnmount() {
      this.isFetching.current = true;
    }
    render() {
      // return this.state.data.length > 0 ? (
      //   <WrappedComponent {...this.props} data={this.state.data} />
      // ) : (
      //   <p>.......</p>
      // );
      // using suspense
      return (
        <React.Suspense fallback={"loading loading"}>
          <WrappedComponent {...this.props} data={this.state.data} />
        </React.Suspense>
      );
    }
  }
  // console.log("with data:", withData);
  return withData;
}

export default WithData;
