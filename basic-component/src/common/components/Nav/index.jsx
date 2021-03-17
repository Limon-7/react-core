import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FrowardRefClass from "../../../ui/forwardRefDemo";
import { ForwardRefHoc } from "../../../ui/forwardRefHoc";
import OuterClickHandle from "../../../ui/outerclick";
import PortalDemo from "../../../ui/portals";
import PureComponentDemo from "../../../ui/PureComponent/PureComponentDemo";
import StateDemoContainer from "../../../ui/stateDemo/StateDemo";

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
        <Route path="/state">
          <StateDemoContainer />
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
      <Link to="/state">State</Link>
    </div>
  );
};
export default Nav;
