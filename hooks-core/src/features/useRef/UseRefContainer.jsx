import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import UseRef from "./UseRef";
import UseRefReRendering from "./UseRefReRendering";
const Home = () => {
  return (
    <>
      <h1>Home Conatiner</h1>
    </>
  );
};
const SideBar = () => {
  return (
    <>
      <Link to="/useRef">user-ref-home</Link>
      <Link to="/useRef/demo">demo</Link>
      <Link to="/useRef/re-render">re-render</Link>
      <Switch>
        <Route exact path="/useRef" component={Home} />
        <Route exact path="/useRef/demo" component={UseRef} />
        <Route exact path="/useRef/re-render" component={UseRefReRendering} />
      </Switch>
    </>
  );
};
function UseRefContainer() {
  return (
    <div>
      <SideBar />
      {/* <UseRef /> */}
    </div>
  );
}

export default UseRefContainer;
