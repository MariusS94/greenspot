import React from "react";
import { Link } from "react-router-dom";
import bulp from "../assets/bulp.svg";

import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BulpIcon = styled.img`
  height: 2.5rem;
  width: auto;
  padding: 1rem 0;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/energy/home">
        <BulpIcon src={bulp} alt="Bulp logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
