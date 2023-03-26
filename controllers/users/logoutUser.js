const { logoutUser } = require("../../models");

const logoutUserController = async (req, res) => {
  try {
    await logoutUser(req.user.id);

    res.status(204).send('No Content');
  } catch (error) {}
};

module.exports = logoutUserController;