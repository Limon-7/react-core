import { Link, Route, Switch } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";
import "./header.css";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const UserContainer = React.lazy(() => import("../hoc/user-container"));
const HookContainer = React.lazy(() => import("../Hook/HookContainer"));
const Reconciliation = lazy(() => import("../Reconciliation"));
const RenderPropsContainer = lazy(() =>
  import("../RenderProps/RenderPropsContainer")
);
const SyntheticEvent = lazy(() => import("../SyntheticEvent"));

function Header() {
  return (
    <>
      <div className="header">
        <Nav />
        <ErrorBoundary>
          <Suspense fallback={<p>loading.....</p>}>
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
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
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
