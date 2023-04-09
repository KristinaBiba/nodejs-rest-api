const addUserController = require("./addUser");
const loginUserController = require("./loginUser");
const logoutUserController = require("./logoutUser");
const currentUserController = require("./currentUser");
const changeUserSubController = require("./changeUserSub");
const changeUserAvatarController = require("./changeUserAvatar");
const checkVerificationTokenController = require("./checkVerificationToken");
const sendVerificationEmailController = require("./sendVerificationEmailController");


module.exports = {
    addUserController,
    loginUserController,
    logoutUserController,
    currentUserController,
    changeUserSubController,
    changeUserAvatarController,
    checkVerificationTokenController,
    sendVerificationEmailController,
};
