import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ToggleTheme() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggleTheme">
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

export default ToggleTheme;

/* class ToggleTheme extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <div className="toggleTheme">
        <button onClick={toggleTheme}>toggle</button>
      </div>
    );
  }
}

export default ToggleTheme; */
