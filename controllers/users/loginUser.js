const { loginUser } = require("../../models");

const loginUserController = async (req, res) => {
  try {
    const user = await loginUser(req.user);
    res.status(200).json({user});
  } catch (error) {}
};

module.exports = loginUserController;