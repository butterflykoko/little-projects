const express = require("express"),
  app = express(),
  fs = require("fs"),
  public = require("./public");

app.use(express.static("public"));

app.get("/index.html", (req, res) => {
  fs.readFile("../index.html", function (err, data) {
    res.write(data);
    res.end();
  });
});

app.use("/public", public);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
