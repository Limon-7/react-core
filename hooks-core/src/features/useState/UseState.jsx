import UseForm from "components/useForm/UseForm";
import React, { useState } from "react";
import StopWatch from "./StopWatch";

import "./UseState.css";

function UseState() {
  const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 10 });
  const [{ email, password }, setValue] = useState({
    email: "",
    password: "12345",
  });
  const [values, handleValues] = UseForm({ firstName: "limon", lastName: "" });
  const [formValues, setFormValue] = UseForm({
    email: "email",
    password: "passsword",
  });
  //
  const handleChange = (e) => {
    setValue((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", formValues.email);
    console.log("password:", formValues.password);
  };
  return (
    <div className="useState">
      {/* use custom hook */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          // dynamic set values using hooks
          value={values.firstName}
          onChange={handleValues}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleValues}
        />
        <input type="submit" value="UseStateHook" />
      </form>
      {/* using custom hook */}
      <CustomForm
        handleChange={setFormValue}
        handleSubmit={handleSubmit}
        email={formValues.email}
        password={formValues.password}
      />
      {/* <CustomForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        email={email}
        password={password}
      /> */}
      <br />
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
          }))
        }
      >
        +
      </button>
      <h1>count1: {count1}</h1>
      <h1>count2: {count2}</h1>
      <StopWatch />
    </div>
  );
}

export default React.memo(UseState);

// // use  default form
// const useForm = (initialValues) => {
//   const [values, setValues] = useState(initialValues);
//   console.log("Values,", values);
//   return [
//     values,
//     (e) => {
//       setValues({
//         ...values,
//         [e.target.name]: e.target.name,
//       });
//     },
//   ];
// };
// make a custom form
const CustomForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="email"
        name="email"
        value={props.email}
        onChange={(e) => props.handleChange(e)}
      />
      <br />
      <input
        type="password"
        name="password"
        value={props.password}
        onChange={(e) => props.handleChange(e)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
