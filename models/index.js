const {
  listContacts,
  getContactById,
  updateContact,
  removeContact,
  addContact,
  updateStatusContact,
} = require("./contacts");
const {
  addUser,
  loginUser,
  logoutUser,
} = require("./users");

module.exports = {
  listContacts,
  getContactById,
  updateContact,
  removeContact,
  addContact,
  updateStatusContact,
  addUser,
  loginUser,
  logoutUser,
};
