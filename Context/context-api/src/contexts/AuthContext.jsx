import React, { Component, createContext } from "react";

const AuthContext = createContext();
class AuthContextProvider extends Component {
  state = {
    isAuthenticate: false,
  };
  handleAuthChange = () => {
    this.setState({ isAuthenticate: !this.state.isAuthenticate });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, handleAuthChange: this.handleAuthChange }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;
export { AuthContext, AuthContextProvider, AuthConsumer };
