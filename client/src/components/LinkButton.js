import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkButton = (props) => {
  return (
    <Link to={props.link}>
      <button>{props.label}</button>
    </Link>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};
