const { changeUserSub } = require("../../models");

const changeUserSubController = async (req, res) => {
  try {
    const currentUser = await changeUserSub(req.body);
    res.status(200).json({user: currentUser});
  } catch (error) {}
};

module.exports = changeUserSubController;