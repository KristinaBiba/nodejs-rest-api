const {
  getAllController,
  getByIdController,
  changeContactController,
  deleteController,
  addContactController,
  changeFildFavorite,
} = require("./contacts");
const {
  addUserController,
  loginUserController,
  logoutUserController,
} = require("./users");

module.exports = {
  addContactController,
  getAllController,
  getByIdController,
  deleteController,
  changeContactController,
  changeFildFavorite,
  addUserController,
  loginUserController,
  logoutUserController,
};
