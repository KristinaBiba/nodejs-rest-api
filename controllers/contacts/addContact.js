const { addContact } = require("../../models");

const addContactController = async (req, res) => {
  try {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {}
};

module.exports = addContactController;
