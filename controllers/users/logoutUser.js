const { logoutUser } = require("../../models");
const { AppError } = require("../../utils");

const logoutUserController = async (req, res) => {
  try {
    await logoutUser(req.user.id);

    res.status(204).send('No Content');
  } catch (error) {return new AppError(500, error.massage);}
};

module.exports = logoutUserController;