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
    // setInterval(() => {
    //   this.setState(() => ({
    //     userArray: [...this.state.userArray],
    //   }));
    // }, 1000);
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      })
      //() => console.log("Render:", this.state.count)//this is a call back function.
    );
  };

  render() {
    console.log("Re-render-render:");
    return (
      <div>
        <button onClick={() => this.handleClick()}>Click</button>
        <p>Count:{this.state.count}</p>
        <b>Array Length is: {this.state.userArray.length}</b>
        <Demo2 count={this.state.count} action={this.handleClick} />
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
        <button onClick={() => this.props.action()}>Chaild Button</button>
      </div>
    );
  }
}
