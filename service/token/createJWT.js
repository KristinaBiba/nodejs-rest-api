const jwt = require("jsonwebtoken");

const createJWT = async (id) => {
  const token = jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
  return token;
};

module.exports = createJWT;
