const checkUserData = require("./checkUserData");
const checkUniqueEmail = require("./checkUniqueEmail");
const checkUserLoginData = require("./checkUserLoginData");
const checkToken = require("./checkToken");
const checkUserSub = require("./checkUserSub");
const checkUserId = require("./checkUserId");
const uploadUserAvatar = require("./uploadUserAvatar");

module.exports = {
    checkUserData,
    checkUniqueEmail,
    checkUserLoginData,
    checkToken,
    checkUserSub,
    checkUserId,
    uploadUserAvatar,
};