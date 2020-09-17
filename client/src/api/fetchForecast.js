export async function fetchForecast(zip) {
  const response = await fetch(`/${zip}`);

  if (!response.ok) {
    throw new Error(response);
  }

  const results = await response.json();

  const energyPropForecast = results[0].map((forecastData) => ({
    time: forecastData.timeStamp,
    gsi: forecastData.gsi,
  }));

  const zipForecast = {
    zip: results[1].zip,
    city: results[1].city,
    energyPropForecast,
  };

  return zipForecast;
}
