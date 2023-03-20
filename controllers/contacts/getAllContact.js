const { listContacts } = require("../../models");

const getAllController = async (req, res) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ contacts });
  } catch (error) {
    return error;
  }
};

module.exports = getAllController;
