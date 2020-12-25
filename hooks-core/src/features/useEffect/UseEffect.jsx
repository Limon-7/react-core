import UseForm from "components/useForm/UseForm";
import UseFetch from "./UseFetch";
import React, { useEffect, useState } from "react";

function UseEffect() {
  const [values, handleChange] = UseForm({ email: "", name: "", password: "" });

  // to prevent everytime intializing use a arrow function
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  );
  // const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = UseFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 5);
  };
  // debugger;
  console.log("Count", count);
  console.log("Re rendering");
  return (
    <div className="useEffect">
      <div>{loading ? "loading......" : <p>{data}</p>}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
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
        <input type="submit" value="SubmitForm" />
      </form>
    </div>
  );
}

export default UseEffect;
