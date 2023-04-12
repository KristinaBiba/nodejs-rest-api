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
} = require("../../controllers");

const {
  checkUserData,
  checkUniqueEmail,
  checkUserLoginData,
  checkToken,
  checkUserSub,
  checkUserId,
  uploadUserAvatar,
  checkUserVerify,
} = require("../../middlewares");

router
  .route("/")
  .patch(checkUserId, checkUserSub, changeUserSubController);

router
  .route("/register")
  .post(checkUserData, checkUniqueEmail, addUserController);

router
  .route("/login")
  .post(checkUserData, checkUserLoginData, loginUserController);

router.route("/logout").post(checkToken, logoutUserController);

router.route("/current").post(checkToken, currentUserController);

router.route("/avatars").patch(checkToken, uploadUserAvatar, changeUserAvatarController);

router.route("/verify").post(checkUserVerify, sendVerificationEmailController);

router.route("/verify/:verificationToken").get(checkVerificationTokenController);

module.exports = router;
