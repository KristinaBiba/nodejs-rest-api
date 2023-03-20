const express = require("express");
const router = express.Router();

const {
  getAllController,
  getByIdController,
  changeContactController,
  deleteController,
  addContactController,
  changeFildFavorite,
} = require("../../controllers");

const {
  checkId,
  checkContactData,
  checkContactFildFavorite,
} = require("../../middlewares");

router
  .route("/")
  .get(getAllController)
  .post(checkContactData, addContactController);

router
  .route("/:contactId")
  .get(checkId, getByIdController)
  .delete(checkId, deleteController)
  .put(changeContactController);

router
  .route("/:contactId/favorite")
  .patch(checkId, checkContactFildFavorite, changeFildFavorite);

module.exports = router;
