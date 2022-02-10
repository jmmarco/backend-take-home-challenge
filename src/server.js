// import { createServer } from "http";
// import url from "url";

const http = require("http");
const url = require("url");
const getDailyWeather = require("./api");

const { hostname, port } = process.env;

async function myWeather() {
  const weatherData = await getDailyWeather("austin");
  console.log("okkkk");
  console.log(weatherData);
}

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  const { city } = queryObject;

  console.log(req.url);

  switch (req.url) {
    case "/":
      res.statusCode = 200;

      res.setHeader("Content-Type", "application/json");
      res.end("Aha\n");
      break;
    case `/weather/?city=${city}`:
      // const weatherData = getDailyWeather(city);
      myWeather();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(`QUERY PARAMs is ${city}\n`);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<strong>Not found\n</strong>");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
