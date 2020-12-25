import React from "react";
import { MouseTracker } from "./MouseTracker/MouseTracker";
import Cat from "./MouseTracker/MouseTracker";
import "./RenderPropsContainer.css";
import RenderUserConatiner from "./RenderUserConatiner/RenderUserConatiner";
function RenderPropsContainer() {
  return (
    <div className="renderProps">
      <h1>Render props</h1>
      {/* <Cat /> */}
      <RenderUserConatiner />
    </div>
  );
}

export default RenderPropsContainer;
