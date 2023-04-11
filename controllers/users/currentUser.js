const { currentUserdata } = require("../../models");
const { tryCatchWrapper } = require("../../utils");

const currentUserController = async (req, res) => {
  const currentUser = await currentUserdata(req.user);

  res.status(200).json({ user: currentUser });
};

module.exports = {
  currentUserController: tryCatchWrapper(currentUserController),
};
