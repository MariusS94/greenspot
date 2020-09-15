export async function fetchForecast(zip) {
  const response = await fetch(`/${zip}`);

  if (!response.ok) {
    throw new Error(response);
  }

  const results = await response.json();

  return results;
}
