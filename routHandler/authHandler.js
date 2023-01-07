const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userId = req.body;
    console.log(userId);
    const token = jwt.sign(userId, process.env.SECRET_KEY_TOKEN);
    res.send({ token });
  } catch (error) {
    res.send({ error: error.message });
  }
});
module.exports = router;
