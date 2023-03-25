const express = require("express");
const router = express.Router();

const {
  addUserController, loginUserController,
} = require("../../controllers");

const {checkUserData, checkUniqueEmail, checkUserLoginData} = require("../../middlewares");

router
  .route("/register")
  .post(checkUserData, checkUniqueEmail, addUserController);

router
  .route("/login")
  .post(checkUserData, checkUserLoginData, loginUserController);

module.exports = router;
