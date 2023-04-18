const { User } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const logoutUserController = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {token: null});

  res.status(204).send("No Content");
};

module.exports = {
  logoutUserController: tryCatchWrapper(logoutUserController),
};
