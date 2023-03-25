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
} = require("./users");

module.exports = {
  listContacts,
  getContactById,
  updateContact,
  removeContact,
  addContact,
  updateStatusContact,
  addUser
};
