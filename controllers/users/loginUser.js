const { loginUser } = require("../../models");
const { AppError } = require("../../utils");

const loginUserController = async (req, res) => {
  try {
    const {user, token} = await loginUser(req.user);

    res.status(200).json({token, user});
  } catch (error) {return new AppError(500, error.massage);}
};

module.exports = loginUserController;