const express = require("express");
const router = express.Router();

const { addUserController, loginUserController, logoutUserController } = require("../../controllers");

const {
  checkUserData,
  checkUniqueEmail,
  checkUserLoginData,
  checkToken,
} = require("../../middlewares");

router
  .route("/register")
  .post(checkUserData, checkUniqueEmail, addUserController);

router
  .route("/login")
  .post(checkUserData, checkUserLoginData, loginUserController);

router
  .route("/logout")
  .post(checkToken, logoutUserController);

module.exports = router;
