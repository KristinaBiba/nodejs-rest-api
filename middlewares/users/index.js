const {checkUserRegisterData, checkUserLoginData} = require("./checkUserData");
const {checkUniqueEmail} = require("./checkUniqueEmail");
const {checkCorrectUserLoginData} = require("./checkCorrectUserLoginData");
const checkToken = require("./checkToken");
const {checkUserSub} = require("./checkUserSub");
const {checkUserId} = require("./checkUserId");
const uploadUserAvatar = require("./uploadUserAvatar");
const {checkUserVerify} = require("./checkUserVerify");
const {checkAccessRights} = require("./checkAccessRights");
const {checkUserUpdateData} = require("./checkUserUpdateData");

module.exports = {
    checkUserRegisterData,
    checkUniqueEmail,
    checkUserLoginData,
    checkCorrectUserLoginData,
    checkToken,
    checkUserSub,
    checkUserId,
    uploadUserAvatar,
    checkUserVerify,
    checkAccessRights,
    checkUserUpdateData,
};