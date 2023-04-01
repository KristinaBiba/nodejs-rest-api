const { listContacts } = require("../../models");

const getAllController = async (req, res) => {
  try {
    const { limit, page, favorite} = req.query;
    const contacts = await listContacts(limit, page, favorite);
    res.status(200).json({ contacts });
  } catch (error) {
    return error;
  }
};

module.exports = getAllController;
