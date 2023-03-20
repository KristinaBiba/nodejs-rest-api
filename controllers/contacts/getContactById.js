const { getContactById } = require("../../models");

const getByIdController = async (req, res) => {
  try {
    const contact = await getContactById(req.params.contactId);

    res.status(200).json(contact);
  } catch (error) {
    return error;
  }
};

module.exports = getByIdController;
