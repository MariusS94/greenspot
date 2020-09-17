import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (probs) => {
  return (
    <Link to={probs.link}>
      <button>{probs.label}</button>
    </Link>
  );
};

export default LinkButton;
