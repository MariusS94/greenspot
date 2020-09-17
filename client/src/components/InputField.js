import React from "react";

const InputField = (probs) => {
  return (
    <input
      type={probs.type}
      maxLength={probs.maxLength}
      value={probs.value}
      onChange={(event) => probs.onChange(event.target.value)}
      placeholder={probs.placeholder}
    />
  );
};

export default InputField;
