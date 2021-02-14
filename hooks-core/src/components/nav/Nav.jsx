import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import {
  Home,
  UseCallback,
  UseEffect,
  UseMemo,
  UseRefContainer,
  UseState,
  ForwardRefContainer,
  UseLayoutEffect,
} from "features";

import "./Nav.css";

const route = [
  { path: "/", name: "Home", exact: true, component: Home },
  { path: "/usestate", name: "UseState", component: UseState },
  { path: "/useeffect", name: "UseEffect", component: UseEffect },
  { path: "/useRef", name: "UseRef", component: UseRefContainer },
  { path: "/uselayout", name: "UesLayOutEffect", component: UseLayoutEffect },
  { path: "/usecallback", name: "UseCallBack", component: UseCallback },
  { path: "/usememo", name: "UseMemo", component: UseMemo },
  { path: "/forwardref", name: "ForwardRef", component: ForwardRefContainer },
];
function Nav() {
  return (
    <>
      <Header />
      <div className="body">
        <Switch>
          {route.map((link) => (
            <Route
              key={link.path}
              exact={link.exact}
              path={link.path}
              component={link.component}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </>
  );
}
const Header = () => {
  return (
    <div className="header">
      {route.map((item) => (
        <NavLink
          exact={item.exact}
          key={item.path}
          to={item.path}
          activeClassName="header__linkActive"
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};
export default React.memo(Nav);

const Footer = () => {
  return (
    <div className="footer">
      <h1>Limon </h1>
      <p>Designation: Full Stack developer</p>
    </div>
  );
};
