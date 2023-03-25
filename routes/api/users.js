const express = require("express");
const router = express.Router();

const {
  addUserController,
} = require("../../controllers");

const {checkUserData, checkUniqueEmail} = require("../../middlewares");

router
  .route("/register")
  .post(checkUserData, checkUniqueEmail, addUserController);

// router
//   .route("/login")
//   .post(checkId, getByIdController);

module.exports = router;
