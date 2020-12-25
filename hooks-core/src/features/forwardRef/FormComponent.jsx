import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";

function FormComponent({ className }) {
  const [{ email, password, isInvalid }, setValues] = useState({
    email: "",
    password: "",
    isInvalid: true,
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const sumbitRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const emailKeyDown = (e) => {
    if (e.keyCode === "9") {
      passwordRef.current.focus();
    }
  };
  const passwordKeyDown = (e) => {
    if (e.keyCode === "13") {
      sumbitRef.current.focus();
    }
  };

  const handleonSubmit = (e) => {
    // if (!) {
    e.preventDefault();
    console.log("form submitted");
    // }
  };

  console.log(isInvalid);
  const handleOnchange = (e) => {
    setValues((currenState) => ({
      ...currenState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleonSubmit} className={className}>
      <CustomInput
        htmlFor="Email"
        onKeyDown={emailKeyDown}
        ref={emailRef}
        type="email"
        className="form-control"
        placeholder="Enter email"
        name={email}
        onChange={handleOnchange}
      />
      <CustomInput
        onKeyDown={passwordKeyDown}
        ref={passwordRef}
        type="password"
        htmlFor="Password"
        className="form-control"
        placeholder="Password"
        name={password}
        onChange={handleOnchange}
      />
      {/* {error && <div>{error.message}</div>} */}
      <button ref={sumbitRef} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
