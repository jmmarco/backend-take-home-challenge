const http = require("http");
const url = require("url");
const getDailyWeather = require("./api");
const parseDailyWeatherResults = require("./utils");
const host = "127.0.0.1";
const port = 4000;

/**
 * Represents a instance of a asynchronous Node HTTP server.
 * @param {req} request - The request object of the server.
 * @param {res} response - The response object of the server.
 */
const server = http.createServer(async (req, res) => {
  // Isolate the query object and extract the city parameter
  const queryObject = url.parse(req.url, true).query;
  const { city } = queryObject;

  // An object to hold the results of the request being made
  const results = {};

  switch (req.url) {
    case `/weather/?city=${encodeURI(city)}`:
      res.setHeader("Content-Type", "application/json");
      try {
        const rawWeatherData = await getDailyWeather(city);
        results.weather_data = parseDailyWeatherResults(rawWeatherData);
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      } catch (err) {
        res.statusCode = 500;
        res.end(`Something went wrong! Try again later. ${err}`);
      }
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/text");
      const welcome = `Welcome to the Simple Weather API\nAvailable endpoints are: /weather/?city=NAME\nReplace NAME with the city name of your choosing.
      `;
      res.end(welcome);
      break;
  }
});

// Make the HTTP server instance listen on the default port and hostname
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
