import React from "react";
import styled from "@emotion/styled";
import windturbine from "../assets/windpower.png";
import Footer from "../components/Footer";

const BackgroundContainer = styled.div`
  background-image: url(${windturbine});
  background-size: cover;
  height: 100vh;
  filter: blur(5px) saturate(1.2);
`;

const Forecast = () => {
  return (
    <>
      <BackgroundContainer />
      <Footer />
    </>
  );
};

export default Forecast;
