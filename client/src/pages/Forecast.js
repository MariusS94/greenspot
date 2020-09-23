import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import BulpLogo from "../components/BulpLogo";
import BackgroundContainer from "../components/BackgroundContainer";

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px) saturate(1.2);
`;

const Forecast = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <BulpLogo />
        <Footer />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Forecast;
