const {
  checkId,
  checkContactData,
  checkContactFildFavorite,
  checkUpdateContactData,
} = require("./contacts");
const {
  checkUserRegisterData,
  checkUniqueEmail,
  checkUserLoginData,
  checkToken,
  checkUserSub,
  checkUserId,
  uploadUserAvatar,
  checkUserVerify,
  checkAccessRights,
  checkUserUpdateData,
  checkCorrectUserLoginData,
} = require("./users");

module.exports = {
  checkId,
  checkContactData,
  checkContactFildFavorite,
  checkUpdateContactData,
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
