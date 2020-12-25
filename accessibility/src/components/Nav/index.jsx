import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FrowardRefClass from "../forwardRefDemo";
import { ForwardRefHoc } from "../forwardRefHoc";
import OuterClickHandle from "../outerclick";

import "./nav.css";
function Nav() {
  return (
    <div className="nav">
      <Header />
      <Switch>
        <Route path="/access">
          <OuterClickHandle />
        </Route>
        <Route path="/forwardRef">
          <FrowardRefClass />
        </Route>
        <Route path="/forwardRefcallback">
          <ForwardRefHoc />
        </Route>
      </Switch>
    </div>
  );
}
const Header = () => {
  return (
    <div className="header">
      <Link to="/access">Access</Link>
      <Link to="/forwardRef">ForwardRef</Link>
      <Link to="/forwardRefcallback">forwardRefcallback</Link>
    </div>
  );
};
export default Nav;
