const { updateContact } = require("../../models");

const changeContactController = async (req, res) => {
  try {
    const updatedContact = await updateContact(req.params.contactId, req.body);
    res.status(200).json(updatedContact);
  } catch (error) {
    return error;
  }
};

module.exports = changeContactController;
