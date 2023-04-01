const {Contact} = require("../../service");

const {AppError} = require("../../utils");

const updateStatusContact = async (contactId, body) => {
  try {
    const { favorite } = body;

    return await Contact.findByIdAndUpdate(
      { _id: contactId },
      { favorite },
      { new: true }
    );
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = updateStatusContact;
