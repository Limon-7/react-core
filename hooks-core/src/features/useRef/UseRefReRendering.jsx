import React from "react";

function UseRefReRendering() {
  const [value, setValue] = React.useState("");
  const valueRef = React.useRef();

  const handleClick = (e) => {
    setValue(valueRef.current.value);
  };
  console.log("cusing re rendering");
  const [count, setCount] = React.useState(0);
  const id = React.useRef(null);

  const clearInterval = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return clearInterval;
  }, []);
  return (
    <div className="re-rendering">
      <h4>Value: {value}</h4>
      <input ref={valueRef} />
      <button onClick={handleClick}>Button</button>
      <CheckRender />
      <div>
        <h1>{count}</h1>
        <button onClick={clearInterval}>Stop</button>
      </div>
    </div>
  );
}

export default UseRefReRendering;
const CheckRender = () => {
  console.log("child component");
  return <h1>I am from child component</h1>;
};
