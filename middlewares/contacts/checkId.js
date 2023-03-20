const AppError = require("../../utils");
const Contact = require("../../service");

const checkId = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contactsList = await Contact.find();

    const contact = contactsList.find((contact) => contact.id === contactId);

    if (!contact) return next(new AppError(404, "Not found"));

    next();
  } catch (error) {
    next(error);
  }
};
module.exports = checkId;
