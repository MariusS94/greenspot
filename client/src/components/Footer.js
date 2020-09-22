import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import energy from "../assets/energy.svg";
import news from "../assets/news.svg";
import car from "../assets/car.svg";
import options from "../assets/options.svg";

const FooterContainer = styled.div`
  background: rgba(134, 134, 134, 0.5);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const FooterIcon = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 1rem 0;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <Link to="/home">
          <FooterIcon src={energy} alt="energy icon" />
        </Link>
        <Link to="/home">
          <FooterIcon src={news} alt="news icon" />
        </Link>
        <Link to="/home">
          <FooterIcon src={car} alt="e-car charge icon" />
        </Link>
        <Link to="/home">
          <FooterIcon src={options} alt="options icon" />
        </Link>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
