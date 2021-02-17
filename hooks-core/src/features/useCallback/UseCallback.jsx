import { CountRender } from "components";
import React, { useCallback, useState } from "react";

export function UseCallback() {
  const [count, setCount] = useState(10);
  const square = [9, 18, 27, 72];

  const handleClick = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );
  // without callback hooks
  // const handleClick = (n) => {
  //   setCount((c) => c + n);
  // };
  return (
    <div className="">
      <MyChild increment={handleClick} />
      <div>{count}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {square.map((item) => {
          return <Square n={item} handleClick={handleClick} key={item} />;
        })}
      </div>
    </div>
  );
}

export default UseCallback;

const MyChild = React.memo(({ increment }) => {
  CountRender("Render");
  return (
    <div>
      <button onClick={() => increment(5)}>Increment</button>
    </div>
  );
});

const Square = React.memo(({ n, handleClick }) => {
  CountRender("Square-render");
  return (
    <div>
      <button onClick={() => handleClick(n)}>{n}</button>
    </div>
  );
});
// export  React.memo(Square);
