import React, { Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

// lazy loading routes

const Home = React.lazy(() => import("../ui/home/Home"));
const About = React.lazy(() => import("../ui/about/About"));
const Privacy = React.lazy(() => import("../ui/privacy/Privacy"));
const AdminDashBoard = React.lazy(() =>
  import("../ui/admin-dashboard/AdminDashBoard")
);
const routes = [
  { name: "Home", path: "/", exact: true, component: Home },
  { name: "About", path: "/about/:id", component: About },
  { name: "Privacy", path: "/privacy", component: Privacy },
  { name: "Admin", path: "/admin", component: AdminDashBoard },
];

function Header() {
  return (
    <div className="header">
      {routes.map((link) => (
        <NavLink
          exact
          key={link.path}
          to={link.path}
          activeClassName="header__linkActive"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          strict
        >
          {link.name}
        </NavLink>
      ))}
      <hr />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <Header />
      <Suspense fallback={<p>page is.....loading</p>}>
        <Switch>
          {routes.map((link) => (
            <Route
              key={link.path}
              exact={link.exact}
              path={link.path}
              component={link.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default Navbar;
