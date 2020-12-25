import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Modal.css";
export class Modal extends Component {
  handleOnClose = (e) => {
    this.props.handleOnClose && this.props.handleOnClose(e);
  };
  onKeyUp = (e) => {
    if (e.which === 27 && this.props.toggle) {
      this.handleOnClose(e);
    }
  };
  componentDidMount() {
    document.addEventListener("keyup", this.onKeyUp);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.onKeyUp);
  }
  render() {
    if (!this.props.toggle) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal__style">
          <div className="modal_body">{this.props.children}</div>
          <div className="modal__footer">
            <button onClick={(e) => this.handleOnClose(e)}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
Modal.prototypes = {
  handleOnClose: PropTypes.func.isRequired,
};
