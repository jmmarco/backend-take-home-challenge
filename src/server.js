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
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end("Welcome to the humble weather API!\n");
      break;
    case `/weather/?city=${encodeURI(city)}`:
      try {
        const rawWeatherData = await getDailyWeather(city);
        results.weather_data = parseDailyWeatherResults(rawWeatherData);
      } catch (err) {
        results.error = err.messsage;
        res.statusCode = 500;
        res.end("Something went wrong! Try again later.");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(results));
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<strong>Not found\n</strong>");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(
    `Server running at http://${process.env.HOSTNAME}:${process.env.SSE_MANAGER_PORT_80_TCP_PORT}/`
  );
});
