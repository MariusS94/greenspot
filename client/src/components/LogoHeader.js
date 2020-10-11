import React from "react";
import { Link } from "react-router-dom";
import bulp from "../assets/bulp.svg";

import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BulpIcon = styled.img`
  height: 3rem;
  width: auto;
  padding: 1rem 0;
`;

export const LogoHeader = () => {
  return (
    <Header>
      <Link to="/energy/home">
        <BulpIcon src={bulp} alt="Bulp logo" />
      </Link>
    </Header>
  );
};

export default LogoHeader;
