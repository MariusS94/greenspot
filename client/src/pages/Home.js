import React, { useState, useEffect } from "react";
import { fetchCurrentGsi } from "../api/fetchForecast";
import BackgroundContainer from "../components/BackgroundContainer";
import SwipeUpFooter from "../components/SwipeUpFooter";
import styled from "@emotion/styled";
import ErrorScreen from "../components/ErrorScreen";

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
  const [currentGsiCity, setCurrentGsiCity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const zip = localStorage.getItem("zip") || "53842";
    async function doFetch() {
      try {
        setError(null);
        const currentGsi = await fetchCurrentGsi(zip);
        setCurrentGsiCity(currentGsi);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    doFetch();
  }, []);

  if (error) {
    return <ErrorScreen />;
  }

  if (isLoaded) {
    return (
      <BackgroundContainer>
        <InfoWrapper>
          <CityDisplay>{currentGsiCity.city}</CityDisplay>
          <CurrentGsiDisplay>{currentGsiCity.gsi + "%"}</CurrentGsiDisplay>
          <InfoText>Aktueller Ökostromanteil</InfoText>
        </InfoWrapper>
        <SwipeUpFooter />
      </BackgroundContainer>
    );
  }

  return <BackgroundContainer />;
};

export default Home;
