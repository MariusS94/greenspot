import React, { useState, useEffect } from "react";
import { fetchCurrentGsi, fetchCity } from "../api/fetchForecast";
import BackgroundContainer from "../components/BackgroundContainer";
import SwipeUpFooter from "../components/SwipeUpFooter";
import styled from "@emotion/styled";

const CurrentGsiDisplay = styled.div`
  font-size: 25vw;
  color: #dea64c;
`;

const CityDisplay = styled.div`
  font-size: 8vw;
  color: #ffffff;
  font-style: bold;
`;

const InfoText = styled.div`
  font-size: 7vw;
  color: #ffffff;
  font-style: bold;
`;

const InfoWrapper = styled.div`
  position: fixed;
  left: 3rem;
  bottom: 6rem;
`;

const Home = () => {
  const [currentGsi, setCurrentGsi] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const zip = localStorage.getItem("zip") || "53842";
    async function doFetch() {
      const city = await fetchCity(zip);
      const currentGsi = await fetchCurrentGsi(zip);
      setCity(city);
      setCurrentGsi(currentGsi);
    }
    doFetch();
  }, []);

  return (
    <BackgroundContainer>
      <InfoWrapper>
        <CityDisplay>{city}</CityDisplay>
        <CurrentGsiDisplay>{currentGsi + "%"}</CurrentGsiDisplay>
        <InfoText>Aktueller Ökostromanteil</InfoText>
      </InfoWrapper>
      <SwipeUpFooter />
    </BackgroundContainer>
  );
};

export default Home;
