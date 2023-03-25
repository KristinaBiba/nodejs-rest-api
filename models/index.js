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
};
