const express = require("express");
const postHandler = require("./routHandler/postHandler");
const app = express();
const config = {};
config.port = {
  port: process.env.PORT || 5000,
};

app.use("/post", postHandler);
app.get("/", (req, res) => {
  res.send("server is running...");
});
app.listen(config.port.port, () => {
  console.log(`App is listen on port ${config.port.port}`);
});
