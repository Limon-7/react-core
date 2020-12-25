import React from "react";
import Counter from "./Counter";
import FormComponent from "./FormComponent";

import ForwardvsUseRef from "./ForwardvsUseRef";
import { Profile } from "./ForwardvsUseRef";

import "./ForwardRefContainer.css";
function ForwardRefContainer() {
  return (
    <div className="useRefForwardRef">
      <FormComponent className="left-ref" />
      <Counter className="counter" />
      <ForwardvsUseRef />
      <Profile />
    </div>
  );
}

export default ForwardRefContainer;
