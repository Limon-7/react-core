import React, { Component, useContext } from "react";
import { AuthConsumer, AuthContext } from "../contexts/AuthContext";
import { ThemeConsumer, ThemeContext } from "../contexts/ThemeContext";
import "./NavBar.css";

function NavBar() {
  const { handleAuthChange, isAuthenticate } = useContext(AuthContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="navbar"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h1>Context</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={handleAuthChange} className="navbar__auth">
          {isAuthenticate ? "Logout" : "Login"}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

/* class NavBar extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) => {
          return (
            <ThemeConsumer>
              {(themeContext) => {
                const { handleAuthChange, isAuthenticate } = authContext;
                const { isLightTheme, dark, light } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                  <div
                    className="navbar"
                    style={{ background: theme.bg, color: theme.syntax }}
                  >
                    <h1>Context</h1>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li onClick={handleAuthChange} className="navbar__auth">
                        {isAuthenticate ? "Logout" : "Login"}
                      </li>
                    </ul>
                  </div>
                );
              }}
            </ThemeConsumer>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default NavBar;
 */
