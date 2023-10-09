const express = require("express"),
  app = express(),
  home = require("./routes/home"),
  public = require("./routes/public");

app.use("/home", home);
app.use("/public", public);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
