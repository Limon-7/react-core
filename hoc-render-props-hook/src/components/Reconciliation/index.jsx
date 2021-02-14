import React, { Component } from "react";

export class Reconciliation extends Component {
  state = {
    result: "",
    entry1: "",
    entry2: "",
  };

  handleEntry1 = (event) => {
    this.setState({ entry1: event.target.value });
  };

  handleEntry2 = (event) => {
    this.setState({ entry2: event.target.value });
  };

  handleAddition = (event) => {
    const firstInt = parseInt(this.state.entry1);
    const secondInt = parseInt(this.state.entry2);
    this.setState({ result: firstInt + secondInt });
  };

  render() {
    const { entry1, entry2, result } = this.state;
    console.log(this.state);
    return (
      <div>
        <div>
          <p>Entry 1: {entry1}</p>
          <p>Entry 2: {entry2}</p>
          <p>Result: {result}</p>
        </div>
        <br />
        <span>
          <input type="text" onChange={this.handleEntry1} />
        </span>
        <br />
        <br />
        <span>
          <input type="text" onChange={this.handleEntry2} />
        </span>
        <div>
          <button onClick={this.handleAddition} type="submit">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Reconciliation;
