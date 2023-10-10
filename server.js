const express = require("express"),
  path = require("path"),
  app = express(),
  port = 8080;

app.use(express.static("public"));

app.use("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  console.log("Server listening at: " + port);
});