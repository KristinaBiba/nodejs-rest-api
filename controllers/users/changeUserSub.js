const { changeUserSub } = require("../../models");
const { tryCatchWrapper } = require("../../utils");

const changeUserSubController = async (req, res) => {
    const currentUser = await changeUserSub(req.body);
    res.status(200).json({user: currentUser});
};

module.exports = {changeUserSubController: tryCatchWrapper(changeUserSubController)};