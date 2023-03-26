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
  checkUpdateContactData,
  checkToken,
} = require("../../middlewares");

router.use(checkToken);

router
  .route("/")
  .get(getAllController)
  .post(checkContactData, addContactController);

router
  .route("/:contactId")
  .get(checkId, getByIdController)
  .delete(checkId, deleteController)
  .put(checkId, checkUpdateContactData, changeContactController);

router
  .route("/:contactId/favorite")
  .patch(checkId, checkContactFildFavorite, changeFildFavorite);

module.exports = router;
