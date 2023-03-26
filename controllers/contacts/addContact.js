const { addContact } = require("../../models");
const { AppError } = require("../../utils");

const addContactController = async (req, res) => {
  try {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {return new AppError(500, error.massage);}
};

module.exports = addContactController;
