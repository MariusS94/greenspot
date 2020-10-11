import React, { useState, useEffect } from "react";
import ContentContainer from "./ContentContainer";
import ZipInputPopUp from "./ZipInputPopUp";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Chart from "./Chart";
import { fetchCity } from "../api/fetchForecast";
import ZipButton from "./ZipButton";

const Headline = styled.h2`
  margin: 0.1rem;
`;

export const ForecastChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { zip } = useParams();
  const [cityName, setCityName] = useState(null);

  useEffect(() => {
    async function doFetch() {
      const fetchedData = await fetchCity(zip);
      const fetchedCity = fetchedData.city;
      setCityName(fetchedCity);
    }
    doFetch();
  }, [zip]);

  useEffect(() => {
    setIsOpen(false);
  }, [zip]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContentContainer>
      <Headline>Ökostromanteil</Headline>
      <ZipButton onClick={togglePopup}>{cityName}</ZipButton>
      {isOpen && <ZipInputPopUp handleClose={togglePopup} />}
      <Chart />
    </ContentContainer>
  );
};

export default ForecastChart;
