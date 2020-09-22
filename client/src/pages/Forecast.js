import React from "react";
import styled from "@emotion/styled";
import windturbine from "../assets/windpower.png";
import Footer from "../components/Footer";
import BulpLogo from "../components/BulpLogo";

const BackgroundContainer = styled.main`
  background-image: url(${windturbine});
  background-size: cover;
  height: 100vh;
`;

const ContentContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px) saturate(1.2);
`;

const Forecast = () => {
  return (
    <>
      <BackgroundContainer>
        <ContentContainer>
          <BulpLogo />
          <Footer />
        </ContentContainer>
      </BackgroundContainer>
    </>
  );
};

export default Forecast;
