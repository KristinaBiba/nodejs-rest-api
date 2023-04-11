const {addContactController} = require("./addContact");
const {getAllController} = require("./getAllContact");
const {getByIdController} = require("./getContactById");
const {deleteController} = require("./deleteContact");
const {changeContactController} = require("./updateContact");
const {changeFildFavorite} = require("./changeFavoriteInContact");

module.exports = {
  addContactController,
  getAllController,
  getByIdController,
  deleteController,
  changeContactController,
  changeFildFavorite,
};
