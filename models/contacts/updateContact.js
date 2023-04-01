const {Contact} = require("../../service");

const {AppError} = require("../../utils");

const updateContact = async (contactId, body) => {
  try {
    const { name, email, phone, favorite } = body;
    return await Contact.findByIdAndUpdate(
      { _id: contactId },
      { name, email, phone, favorite },
      { new: true }
    );
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = updateContact;
