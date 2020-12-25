import React, { forwardRef } from "react";

function CustomInput(
  { htmlFor, onKeyDown, type, className, placeholder, name },
  ref
) {
  //   const { htmlFor, ref, onKeyDown, type, className, placeholder } = props;
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{htmlFor}</label>
      <input
        ref={ref}
        onKeyDown={onKeyDown}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

export default forwardRef(CustomInput);
