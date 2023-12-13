import React from "react";

function Input({ placeholder, value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default Input;
