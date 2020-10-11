import React, { useState, useEffect } from "react";
import ContentContainer from "./ContentContainer";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Chart from "./Chart";
import { fetchCity } from "../api/fetchForecast";
import ZipButton from "./ZipButton";
import PropTypes from "prop-types";

const Headline = styled.h2`
  margin: 0.1rem;
`;

export const ForecastChart = (props) => {
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

  return (
    <ContentContainer>
      <Headline>Ökostromanteil</Headline>
      <ZipButton onClick={props.zipOnClick}>{cityName}</ZipButton>
      <Chart />
    </ContentContainer>
  );
};

export default ForecastChart;

ForecastChart.propTypes = {
  zipOnClick: PropTypes.func,
};
