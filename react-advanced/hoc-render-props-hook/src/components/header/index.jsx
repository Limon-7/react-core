import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserContainer from "../hoc/user-container";
import HookContainer from "../Hook/HookContainer";
import Reconciliation from "../Reconciliation";
import RenderPropsContainer from "../RenderProps/RenderPropsContainer";
import SyntheticEvent from "../SyntheticEvent";

import "./header.css";
function Header() {
  return (
    <div className="header">
      <Nav />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/hoc">
          <UserContainer />
        </Route>
        <Route path="/render">
          <RenderPropsContainer />
        </Route>
        <Route path="/hook">
          <HookContainer />
        </Route>
        <Route path="/event">
          <SyntheticEvent />
        </Route>
        <Route path="/reconciliation">
          <Reconciliation />
        </Route>
      </Switch>
    </div>
  );
}
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "black-bg"}`}>
      <Link to="/">Home</Link>
      <Link to="/hoc">HOC</Link>
      <Link to="/render">Render Props</Link>
      <Link to="/hook">Hook</Link>
      <Link to="/event">SyntheticEvent</Link>
      <Link to="/reconciliation">Reconciliation</Link>
    </div>
  );
};
export default Header;
