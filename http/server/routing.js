// Read this before going through the code (VVVVVVVIMP)
// https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is About Page");
  } else if (req.url === "/Careers") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Careers Page");
  } else {
    res.writeHead(400);
    res.end("Page Not Found");
  }
});

server.listen(2000, () => console.log("Server started successfully !!"));
