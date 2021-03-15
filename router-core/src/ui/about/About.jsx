import React from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function About(props) {
  console.log("props:", props);
  const history = useHistory();
  console.log("History:", history);
  let location = useLocation();
  console.log("locations:", location);
  let params = useParams();
  console.log("params:", params);
  const routeMatch = useRouteMatch();
  console.log("RouteMatch:", routeMatch);
  return (
    <div>
      <h1>This about page</h1>
    </div>
  );
}

export default About;
