import React from "react";

function StateDemoContainer() {
  return (
    <div>
      <h1>Set state Example</h1>
      <StateDemo value={5} dec={2} />
    </div>
  );
}

export default StateDemoContainer;

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.value,
    };
    this.isCurrent = React.createRef();
  }
  handleIncrement = () => {
    this.setState(
      (prevState, props) => ({
        count: prevState.count + props.value,
      }),
      () => console.log("Increment Value:", this.state.count)
    );
    // setTimeout(() => {
    //   if (!this.isCurrent.current) {
    //     this.setState(
    //       (prevState, props) => ({
    //         count: prevState.count + props.value,
    //       }),
    //       () => console.log("Increment Value:", this.state.count)
    //     );
    //   }
    // }, 1);
  };
  handleDecrement = () => {
    this.setState(
      { count: this.state.count - this.props.dec },
      console.log("Decrement Value:", this.state.count)
    );
  };
  componentWillUnmount() {
    this.isCurrent.current = true;
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment (+)</button>
        <hr />
        <button onClick={this.handleDecrement} disabled={this.state.count < 1}>
          Decrement (-)
        </button>
      </div>
    );
  }
}
