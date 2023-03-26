const { changeUserSub } = require("../../models");
const { AppError } = require("../../utils");

const changeUserSubController = async (req, res) => {
  try {
    const currentUser = await changeUserSub(req.body);
    res.status(200).json({user: currentUser});
  } catch (error) {return new AppError(500, error.massage);}
};

module.exports = changeUserSubController;