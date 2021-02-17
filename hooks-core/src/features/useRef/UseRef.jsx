import { useFetch, UseForm } from "components";
import { useEffect, useRef, useState } from "react";

import "./userRef.css";
function UseRef() {
  const [values, handleChange] = UseForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);
  const useRef2 = useRef(1);
  console.log("useRef2", useRef2);
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

export default UseRef;

export const Hello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders: ", renders.current++);

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
