import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const InputZip = styled.input`
  border-radius: 1rem;
  border: none;
  padding: 0.2rem;
  background: #ffffff;
  outline: none;
`;

const InputField = (props) => {
  return (
    <InputZip
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;

InputField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
