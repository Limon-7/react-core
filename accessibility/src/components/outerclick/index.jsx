import React, { Component, useState } from "react";

import "./OuterClickHandle.css";
/* export class OuterClickHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.timeOutId = null;
  }
  onBlurHandler = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    });
  };
  onFocusHandler = () => {
    clearTimeout(this.timeOutId);
  };
  onClickHandler = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };
  render() {
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler} aria-haspopup="true" role="modal">
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
        <p>Hello</p>
      </div>
    );
  }
} */
// functional component
function OuterClickHandle(props) {
  const [isOpen, setIsOpen] = useState(false);
  let [timeOutId, setTimeOutId] = useState(null);

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false);
    });
  };
  // const onFocusHandler = () => {
  //   clearTimeout(timeOutId);
  // };
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onBlur={onBlurHandler}>
      <button onClick={onClickHandler} aria-haspopup="true" role="modal">
        Select an option
      </button>
      {isOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
      <p>Hello</p>
    </div>
  );
}

export default OuterClickHandle;
