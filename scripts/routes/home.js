const express = require("express"),
  router = express.Router(),
  fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("../index.html", function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
    } else {
      res.write(data);
    }
    res.end();
  });
});
