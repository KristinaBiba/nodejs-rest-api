const express = require("express");
const router = express.Router();

const {
  addUserController,
  loginUserController,
  logoutUserController,
  currentUserController,
  changeUserSubController,
} = require("../../controllers");

const {
  checkUserData,
  checkUniqueEmail,
  checkUserLoginData,
  checkToken,
  checkUserSub,
  checkUserId,
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

module.exports = router;
