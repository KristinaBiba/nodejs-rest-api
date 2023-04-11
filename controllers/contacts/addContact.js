const { Contact } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const addContactController = async (req, res) => {
  const newContact = await Contact.create({...req.body, owner: req.user.id});
  res.status(201).json(newContact);
};

module.exports = {
  addContactController: tryCatchWrapper(addContactController),
};
