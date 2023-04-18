const { isValidObjectId } = require("mongoose");
const { Contact } = require("../../service");
const { AppError, tryCatchWrapper } = require("../../utils");

const checkId = async (req, res, next) => {
  const { contactId } = req.params;

  if(!isValidObjectId(contactId)) {next(new AppError(400, `${contactId} is not valid id`));}

  const contact = await Contact.findOne({ _id: contactId, owner: req.user.id});

  if (!contact) return next(new AppError(404, "Not found"));

  req.contact = contact;

  next();
};
module.exports = { checkId: tryCatchWrapper(checkId) };
