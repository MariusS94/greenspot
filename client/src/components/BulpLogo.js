import React from "react";
import { Link } from "react-router-dom";
import bulp from "../assets/bulp.svg";
import styled from "@emotion/styled";

const BulpIcon = styled.img`
  height: 4rem;
  width: auto;
  padding: 1.7rem 0;
`;

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
