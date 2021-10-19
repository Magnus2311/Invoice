import React from "react";

const FormInput = (props) => {
  const { type, name, placeholder, value, onChange, className, style } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input-line full-width ${className}`}
      style={style}
    />
  );
};

export default FormInput;
