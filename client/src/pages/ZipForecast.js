import React, { useState, useEffect } from "react";
import { fetchForecast } from "../api/fetchForecast";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";

const ZipForecast = () => {
  const { zip } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedForecast = await fetchForecast(zip);
        setForecastData(fetchedForecast);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [zip]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  console.log(forecastData);

  return <div>Forecast</div>;
};

export default ZipForecast;
