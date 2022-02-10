import { createServer } from "http";

const { hostname, port } = process.env;

const server = createServer((req, res) => {
  console.log(req);
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end("Aha\n");
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end("Not found\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
