const fetch = require("node-fetch");

async function fetchData(zipCode) {
  const response = await fetch(
    ` https://api.corrently.io/core/gsi?zip=${zipCode}`
  );

  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const zipForecast = [result.forecast, result.location];

  return zipForecast;
}

exports.fetchData = fetchData;
