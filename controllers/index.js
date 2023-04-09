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
  currentUserController,
  changeUserSubController,
  changeUserAvatarController,
  checkVerificationTokenController,
  sendVerificationEmailController,
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
  currentUserController,
  changeUserSubController,
  changeUserAvatarController,
  checkVerificationTokenController,
  sendVerificationEmailController,
};
