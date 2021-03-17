import React, { Component } from "react";

export class PureComponentDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      userArray: [1, 2, 3, 4, 5],
    };
  }
  handleClick = () => {
    this.myiterval = setInterval(() => {
      this.setState(() => ({
        userArray: [...this.state.userArray, 8],
      }));
    }, 1000);
    // this.setState(
    //   (prevState) => ({
    //     count: prevState.count + 1,
    //   })
    //() => console.log("Render:", this.state.count)//this is a call back function.
    // );
  };
  componentWillUnmount() {
    clearInterval(this.myiterval);
  }
  render() {
    console.log("Re-render-render:", this.state.count);
    return (
      <div>
        <button onClick={() => this.handleClick()}>Click</button>
        <p>Count:{this.state.count}</p>
        <b>Array Length is: {this.state.userArray.length}</b>
        <Demo2 count={this.state.count} action={this.handleClick} />
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => clearInterval(this.myiterval)}
        >
          Clear Interval
        </button>
      </div>
    );
  }
}

export default PureComponentDemo;

class Demo2 extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Child render:", this.props.count);
    return (
      <div>
        <p>Count:{this.props.count}</p>
        <button onClick={() => this.props.action()}>Child Button</button>
      </div>
    );
  }
}
