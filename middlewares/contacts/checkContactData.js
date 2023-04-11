const { AppError, contactAddSchema, tryCatchWrapper } = require("../../utils");

const checkContactData = async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return next(new AppError(400, "Missing required name field"));
  }

  const { error } = contactAddSchema(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  next();
};

module.exports = { checkContactData: tryCatchWrapper(checkContactData) };
