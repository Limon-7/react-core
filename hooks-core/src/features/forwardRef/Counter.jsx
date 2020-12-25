import React, { useEffect, useRef, useState } from "react";

function Counter({ className }) {
  const [counter, setCounter] = useState(0);
  const previousCounterRef = useRef(15);

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);
  console.log("previousCounterRef", previousCounterRef);
  return (
    <div className={className}>
      <h1>Count: {counter}</h1>
      {typeof previousCounterRef.current !== "undefined" && (
        <h2>Previous Count: {previousCounterRef.current}</h2>
      )}
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-secondary"
      >
        Click Me
      </button>
      <p>
        <strong>useRef(initial value)</strong> returns a mutable ref object
        whose <strong>.current</strong> property is intialized to the passed
        value.The return object will persist for the full life-time of the
        component.
      </p>
    </div>
  );
}

export default Counter;
