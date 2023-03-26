const { currentUserdata } = require("../../models");
const { AppError } = require("../../utils");

const currentUserController = async (req, res) => {
  try {
    const currentUser = await currentUserdata(req.user);

    res.status(200).json({ user: currentUser});
  } catch (error) {return new AppError(500, error.massage);}
};

module.exports = currentUserController;