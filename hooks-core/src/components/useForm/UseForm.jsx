import { useState } from "react";

function UseForm(initialState) {
  const [values, setValues] = useState(initialState);
  //   console.log(values);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
}

export default UseForm;
