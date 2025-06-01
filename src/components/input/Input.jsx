import React from "react";

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
  label,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;
