import React from "react";

function RadioInput({ value, setVariant }) {
  return (
    <label htmlFor={`variant-${value}`}>
      <input
        id={`variant-${value}`}
        type="radio"
        name="variant"
        value={value}
        onChange={(e) => setVariant(e.target.value)}
      />
      {value}
    </label>
  );
}

export default RadioInput;
