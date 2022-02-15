const http = require("http");
const url = require("url");
const getDailyWeather = require("./api");
const parseDailyWeatherResults = require("./utils");

const { hostname, port } = process.env;

const server = http.createServer(async (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const { city } = queryObject;
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

server.listen(port, hostname, () => {
  console.log(
    `Server running at http://${process.env.HOSTNAME}:${process.env.SSE_MANAGER_PORT_80_TCP_PORT}/`
  );
});
