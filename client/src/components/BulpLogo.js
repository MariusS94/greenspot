import React from "react";
import { Link } from "react-router-dom";
import bulp from "../assets/bulp.svg";
import BulpIcon from "./BulpIcon";

const BulpLogo = () => {
  return (
    <>
      <Link to="/energy/home">
        <BulpIcon src={bulp} alt="Bulp logo" />
      </Link>
    </>
  );
};

export default BulpLogo;
