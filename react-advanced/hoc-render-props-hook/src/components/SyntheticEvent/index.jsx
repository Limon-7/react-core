import React, { Component } from "react";

export class SyntheticEvent extends Component {
  state = {
    count: 0,
  };
  // WRONG ACCESS TO EVENT PROPERTIES! NOT WORKING!!
  handleChange = (event) => {
    // event.persist();
    setTimeout(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 2000);
  };
  handleClick = (e) => {
    e.persist();
    setTimeout(() => {
      console.log(e.target.tagName);
    }, 2000);
  };
  render() {
    return (
      <div>
        <span>Edited {this.state.count} times</span>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick}>Text</button>
      </div>
    );
  }
}

export default SyntheticEvent;
/* sythentic event example */
