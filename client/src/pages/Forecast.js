import React from "react";
import Footer from "../components/Footer";
import BackgroundContainer from "../components/BackgroundContainer";
import ForecastCarousel from "../components/ForecastCarousel";
import LogoHeader from "../components/LogoHeader";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px) saturate(1.2);
`;

const Forecast = () => {
  return (
    <BackgroundContainer>
      <PageWrapper>
        <LogoHeader />
        <ForecastCarousel />
        <Footer />
      </PageWrapper>
    </BackgroundContainer>
  );
};

export default Forecast;
