import React, { useState, useEffect } from "react";
import { fetchCurrentGsi } from "../api/fetchForecast";

const Home = () => {
  const [currentGsi, setCurrentGsi] = useState(null);

  useEffect(() => {
    const zip = localStorage.getItem("zip") || "53842";
    async function doFetch() {
      const currentGsi = await fetchCurrentGsi(zip);
      setCurrentGsi(currentGsi);
    }
    doFetch();
  }, []);

  return (
    <div>
      Home
      <div>{currentGsi}</div>
    </div>
  );
};

export default Home;
