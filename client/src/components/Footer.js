import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import energySrc from "../assets/energy.svg";
import newsSrc from "../assets/news.svg";
import carSrc from "../assets/car.svg";

const FooterContainer = styled.footer`
  background: rgba(134, 134, 134, 0.5);
  width: 100%;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const FooterIcon = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0.7rem 0;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <Link to="/home">
          <FooterIcon src={energySrc} alt="energy icon" />
        </Link>
        <Link to="/news/home">
          <FooterIcon src={newsSrc} alt="news icon" />
        </Link>
        <Link to="/mobility/home">
          <FooterIcon src={carSrc} alt="e-car charge icon" />
        </Link>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
