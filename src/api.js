const fetch = require('node-fetch');

const getDailyWeather = (city = '') => {
  if (!process.env.API_KEY) {
    throw new Error('API_KEY is not set');
  }
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${process.env.API_KEY}`;
  return fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

module.exports = getDailyWeather;
