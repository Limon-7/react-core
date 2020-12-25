import React, { createRef, useEffect, useRef, useState } from "react";
import _ from "lodash";

function ForwardvsUseRef() {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();

  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }

  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }
  console.log("createRef():", refFromCreateRef);
  console.log("useRef():", refFromUseRef);
  return (
    <>
      <div className="textComponent">
        <p>Current render index: {renderIndex}</p>
        <p>
          <b>refFromUseRef</b> value: {refFromUseRef.current}
        </p>
        <p>
          <b>refFromCreateRef</b> value:{refFromCreateRef.current}
        </p>

        <button
          onClick={() => setRenderIndex((prev) => prev + 1)}
          className="btn btn-primary"
        >
          Cause re-render
        </button>
        <div style={{ display: "flex", padding: 10, justifyContent: "start" }}>
          <p>
            createRef() always changes its object's current value whereas
            useRef() returnrd object will persist for the full life-time of the
            component.
          </p>
        </div>
      </div>
    </>
  );
}

export const Profile = () => {
  const [user, setUser] = React.useState({ name: "Alex", weight: 20 });

  // const previousUserRef = CustomHook(user);

  const previousUser = CustomHook(user);
  // console.log("previousUserRef", previousUser);
  React.useEffect(() => {
    // const previousUser = previousUserRef.current;
    if (!_.isEqual(previousUser, user)) {
      console.log("You need to do exercise!");
    }
  });

  // const previousUserRef = React.useRef();
  // React.useEffect(() => {
  //   previousUserRef.current = user;
  // });
  const gainWeight = () => {
    const newWeight = Math.random() >= 0.5 ? user.weight : user.weight + 1;
    setUser((user) => ({ ...user, weight: newWeight }));
  };
  return (
    <div className="profile">
      <p>Current weight: {user.weight}</p>
      <button className="btn btn-danger" onClick={gainWeight}>
        Eat burger
      </button>
    </div>
  );
};
export const CustomHook = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  // return ref.current;
  return ref;
};

export default ForwardvsUseRef;
