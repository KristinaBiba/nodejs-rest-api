const {Contact} = require("../../service");

const {AppError} = require("../../utils");

const removeContact = async (contactId) => {
  try {
    return await Contact.findByIdAndDelete(contactId);
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = removeContact;
