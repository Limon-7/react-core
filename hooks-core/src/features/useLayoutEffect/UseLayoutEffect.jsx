import { UseForm } from "components";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import UseFetchUseLayout from "./UseFetchUseLayout";
import useMessure from "./useMessure";

function UseLayoutEffect() {
  const [values, handleChange] = UseForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);
  // to get dimention of dom nodes.
  useLayoutEffect(() => {
    // console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={inputRef}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            placeholder="first name"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
}

export default UseLayoutEffect;

export const Hello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = UseFetchUseLayout(
    `http://numbersapi.com/${count}/trivia`
  );
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const divRef = useRef();
  const [rect, divRef] = useMessure(data);

  return (
    <div>
      <div ref={divRef}>{loading ? "loading..." : data}</div>
      <pre> {JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
