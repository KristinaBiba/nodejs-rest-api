const { logoutUser } = require("../../models");
const { tryCatchWrapper } = require("../../utils");

const logoutUserController = async (req, res) => {
  await logoutUser(req.user.id);

  res.status(204).send("No Content");
};

module.exports = {
  logoutUserController: tryCatchWrapper(logoutUserController),
};
