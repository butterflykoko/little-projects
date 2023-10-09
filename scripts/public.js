const express = require("express"),
  router = express.Router(),
  fs = require("fs");

router.get("/public/search", (req, res) => {
  fs.readFile("../public/search", function (err, data) {
    res.write(data);
    res.end();
  });
  next();
});

router.get("public/blocks/blocks.html", (req, res) => {
  fs.readFile("../public/blocks/blocks.html", function (err, data) {
    res.write(data);
    res.end();
  });
});

router.get("/public/calander/calander.html", (req, res) => {
  fs.readFile("../public/calander/calander.html", function (err, data) {
    res.write(data);
    res.end();
  });
});

router.get("public/piano/piano.html", (req, res) => {
  fs.readFile("../public/piano/piano.html", function (err, data) {
    res.write(data);
    res.end();
  });
});

router.get("public/waterfall/waterfall.html", (req, res) => {
  fs.readFile("../public/waterfall/waterfall.html", function (err, data) {
    res.write(data);
    res.end();
  });
});

module.exports = router;