/**
 * This function parses the original OpenWeather response object
 * and returns an object with simplified weather info for a given city
 * @param {weatherResults} weatherResults - the original OpenWeather API object
 */
const parseDailyWeatherResults = (weatherResults = {}) => {
  const { city, list } = weatherResults;
  return {
    city_name: city.name,
    country_name: city.country,
    forecast: list.reduce((acc, value) => {
      acc.push({
        temperatures: { ...value.temp },
        humidity: value.humidity,
        weather: {
          short_description: value.weather[0].main,
          long_description: value.weather[0].description
        }
      });
      return acc;
    }, [])
  };
};

module.exports = parseDailyWeatherResults;
