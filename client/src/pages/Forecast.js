import React from "react";
import Footer from "../components/Footer";
import BulpLogo from "../components/BulpLogo";
import BackgroundContainer from "../components/BackgroundContainer";
import ContentContainer from "../components/ContentContainer";

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
