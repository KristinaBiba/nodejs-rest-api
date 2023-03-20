const { removeContact } = require("../../models");

const deleteController = async (req, res) => {
  try {
    await removeContact(req.params.contactId);
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    return error;
  }
};

module.exports = deleteController;
