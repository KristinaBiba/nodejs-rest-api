const { currentUserdata } = require("../../models");

const currentUserController = async (req, res) => {
  try {
    const currentUser = await currentUserdata(req.user);

    res.status(200).json({ user: currentUser});
  } catch (error) {}
};

module.exports = currentUserController;