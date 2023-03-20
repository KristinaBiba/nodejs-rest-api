const Contact = require("../../service");

const AppError = require("../../utils");

const listContacts = async () => {
  try {
    return await Contact.find().select("-__v");
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = listContacts;
