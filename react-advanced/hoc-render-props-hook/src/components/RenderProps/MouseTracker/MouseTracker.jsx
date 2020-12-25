import React, { Component } from "react";

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        {/* if we use render then make the parent class render insted of children */}
        {/* <Mouse render={(mouse) => <Cat mouse={mouse} />} /> */}
        <Mouse>{(mouse) => <Cat mouse={mouse} />}</Mouse>
      </div>
    );
  }
}
/* Hoc Pattern */

export function withMouse(WrappedComponent) {
  return class extends React.Component {
    render() {
      console.log("Mouse with hoc", this.props);
      return (
        <Mouse>
          {(mouse) => <WrappedComponent {...this.props} mouse={mouse} />}
        </Mouse>
      );
    }
  };
}
export class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    console.log("mouse", mouse);
    return (
      <img
        src="/logo192.png"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

// how ever we can acheived that hoc pattern
export default withMouse(Cat);
