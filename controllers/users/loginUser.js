const { loginUser } = require("../../models");

const loginUserController = async (req, res) => {
  try {
    const {user, token} = await loginUser(req.user);

    res.status(200).json({token, user});
  } catch (error) {}
};

module.exports = loginUserController;