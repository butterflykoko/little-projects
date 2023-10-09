const http = require("http");
const fs = require("fs");
let r = req.url;

http
  .createServer(function (req, res) {
    switch (r) {
      case r == "/index.html":
        fs.readFile("../index.html", function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;

      case r == "/public/search.html":
        fs.readFile("../public/search.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;

      case r == "/public/calander/calander.html":
        fs.readFile("../public/calander/calander.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;

      case r == "/public/blocks/blocks.html":
        fs.readFile("../public/blocks/blocks.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;

      case r == "/public/piano/piano.html":
        fs.readFile("../public/piano/piano.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;

      case r == "/public/waterfall/waterfall.html":
        fs.readFile("../public/waterfall/waterfall.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
    }
  })
  .listen(8080);
