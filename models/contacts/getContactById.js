const Contact = require("../../service");

const AppError = require("../../utils");

const getContactById = async (contactId) => {
  try {
    return await Contact.findById({ _id: contactId });
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = getContactById;
