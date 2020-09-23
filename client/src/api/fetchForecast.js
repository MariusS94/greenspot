export async function fetchForecast(zip) {
  const response = await fetch(`/api/forecast/${zip}`);

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

export async function fetchCurrentGsi(zip) {
  const zipForecast = await fetchForecast(zip);
  return zipForecast.energyPropForecast[0].gsi;
}

export async function fetchCity(zip) {
  const zipCity = await fetchForecast(zip);
  return zipCity.city;
}

/* export async function fetchCurrentGsi(zip) {
  const currentInfo = await fetchForecast(zip);
  
  
  const CityGsi = {gsi: currentInfo.energyPropForecast[0].gsi,
    city: 
}
 */
