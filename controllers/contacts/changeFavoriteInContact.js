const { updateStatusContact } = require("../../models");
const AppError = require("../../utils");

const changeFildFavorite = async (req, res) => {
  try {
    const updatedContact = await updateStatusContact(
      req.params.contactId,
      req.body
    );
    res.status(200).json(updatedContact);
  } catch (error) {
    return new AppError(404, "Not found");
  }
};

module.exports = changeFildFavorite;
