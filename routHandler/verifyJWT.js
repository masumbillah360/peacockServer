const jwt = require("jsonwebtoken");
const handler = {};
// this function will check the user's have userId or not if user Id found then calll next button otherwise it's give some error
handler.verifyJWT = async (req, res, next) => {
  const token = req.header("authorization");
  if (!token) {
    res.status(403).send({ message: "Unauthorised Access" });
  }
  try {
    const selectedToken = token.split(" ")[1];
    jwt.verify(selectedToken, process.env.SECRET_KEY_TOKEN, (err, decoded) => {
      if (err) {
        res.status(403).send({ message: "Invalid access" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = handler;
