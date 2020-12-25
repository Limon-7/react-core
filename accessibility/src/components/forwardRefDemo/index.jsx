import React, { Component, createRef, forwardRef } from "react";

export class FrowardRefClass extends Component {
  constructor(props) {
    super(props);
    this.myVideo = createRef();
  }
  ref = createRef();
  handleClick = () => {
    this.ref.current.focus();
  };
  render() {
    return (
      <div>
        <div className="forward__focus">
          <FancyInput ref={this.ref}>Click me</FancyInput>
          <button onClick={this.handleClick}>Input Focus</button>
        </div>
        <div className="forward__video">
          <video
            ref={this.myVideo}
            width="320"
            height="176"
            src="https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_PM.mp4"
          ></video>
          <button onClick={() => this.myVideo.current.play()}>Play</button>
          <button onClick={() => this.myVideo.current.pause()}>Pause</button>
        </div>
      </div>
    );
  }
}
// passing  a ref to child component
export const FancyInput = forwardRef((props, ref) => <input ref={ref} />);

export default FrowardRefClass;
