const { loginUser } = require("../../models");
const { tryCatchWrapper } = require("../../utils");

const loginUserController = async (req, res) => {
  const { user, token } = await loginUser(req.user);

  res.status(200).json({ token, user });
};

module.exports = { loginUserController: tryCatchWrapper(loginUserController) };
