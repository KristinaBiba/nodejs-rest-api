const jwt = require("jsonwebtoken");

const createJWT = async (id) => {
  const token = jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "15d" });
  return token;
};

module.exports = createJWT;
