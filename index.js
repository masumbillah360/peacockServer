const express = require("express");
const newsHandler = require("./routHandler/newsHandler");
const cors = require("cors");
const app = express();

// midleware
app.use(cors());
app.use(express.json());

// module scaffolding
const config = {};

// config file port
config.port = {
  port: process.env.PORT || 5000,
};
// main function
const run = async () => {
  try {
    // news handler route
    app.use("/news", newsHandler);
  } catch (error) {
    console.log(error.message);
  }
};
run().catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("server is running...");
});

// listen server here
app.listen(config.port.port, () => {
  console.log(`App is listen on port ${config.port.port}`);
});
