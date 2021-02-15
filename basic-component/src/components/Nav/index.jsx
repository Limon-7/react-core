import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FrowardRefClass from "../forwardRefDemo";
import { ForwardRefHoc } from "../forwardRefHoc";
import OuterClickHandle from "../outerclick";
import PortalDemo from "../portals";
import PureComponentDemo from "../PureComponent/PureComponentDemo";

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
        <Route path="/purecomponent">
          <PureComponentDemo />
        </Route>
        <Route path="/portal">
          <PortalDemo />
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
      <Link to="/purecomponent">purecomponent</Link>
      <Link to="/portal">Portal</Link>
    </div>
  );
};
export default Nav;
