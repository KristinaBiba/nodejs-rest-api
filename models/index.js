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
  currentUserdata,
  changeUserSub,
  checkVerificationToken,
  
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
  currentUserdata,
  changeUserSub,
  checkVerificationToken,
};
