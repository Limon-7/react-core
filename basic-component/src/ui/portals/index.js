import React, { Component } from "react";
import Modal from "./Modal";

export class PortalDemo extends Component {
  state = {
    showModal: false,
  };
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div className="component">
        <button
          onClick={() =>
            this.setState((state) => ({ showModal: !state.showModal }))
          }
        >
          Open Modal
        </button>
        <Modal
          message="Hello World!"
          isOpen={this.state.showModal}
          onClose={() => this.handleCloseModal()}
        />
      </div>
    );
  }
}

export default PortalDemo;
