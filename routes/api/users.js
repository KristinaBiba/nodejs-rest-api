const express = require("express");
const router = express.Router();

const {
  addUserController,
  loginUserController,
  logoutUserController,
  currentUserController,
  changeUserSubController,
  changeUserAvatarController,
  checkVerificationTokenController,
  sendVerificationEmailController,
  updateUserController,
} = require("../../controllers");

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
} = require("../../middlewares");


router
  .route("/")
  .patch(checkToken, checkAccessRights, checkUserId, checkUserSub, changeUserSubController);

router
  .route("/register")
  .post(checkUserRegisterData, checkUniqueEmail, addUserController);

router
  .route("/login")
  .post(checkUserLoginData, checkUserLoginData, loginUserController);

router.route("/logout").post(checkToken, logoutUserController);

router.route("/current").post(checkToken, currentUserController).put(checkToken, checkUserUpdateData, updateUserController);

router.route("/avatars").patch(checkToken, uploadUserAvatar, changeUserAvatarController);

router.route("/verify").post(checkUserVerify, sendVerificationEmailController);

router.route("/verify/:verificationToken").get(checkVerificationTokenController);

module.exports = router;
