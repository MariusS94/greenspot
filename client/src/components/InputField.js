import React from "react";
import PropTypes from "prop-types";

const InputField = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
