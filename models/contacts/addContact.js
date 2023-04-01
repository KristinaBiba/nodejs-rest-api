const {Contact} = require("../../service");

const {AppError} = require("../../utils");

const addContact = async ({ name, email, phone, favorite }) => {
  try {
    return await Contact.create({
      name,
      email,
      phone,
      favorite: favorite || false,
    });
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = addContact;
