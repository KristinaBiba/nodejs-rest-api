const { Contact } = require("../../service");

const {AppError} = require("../../utils");

const getContactById = async (contactId) => {
  try {
    const contact = await Contact.findById({ _id: contactId });
    return contact;
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = getContactById;
