const fetch = require("node-fetch");

const getDailyWeather = (city = "") => {
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${process.env.API_KEY}`;
  return fetch(endpoint)
    .then((response) => {
      console.log("OOKKKK");
      console.log(response);
      if (response.ok) {
        console.log("");
        console.log(response);
        return response.json();
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = getDailyWeather;
