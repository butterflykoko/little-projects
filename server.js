const http = require("http"),
  express = require("express"),
  path = require("path"),
  app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const server = http.createServer(app),
  port = 8080;

server.listen(port);
console.debug("Server listening on port " + port);
