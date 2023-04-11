const { AppError, tryCatchWrapper, contactUpdateSchema } = require("../../utils");

const checkUpdateContactData = async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name && !email && !phone) {
    return next(new AppError(400, "missing fields"));
  }

  const { error } = contactUpdateSchema(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  return next();
};
module.exports = {
  checkUpdateContactData: tryCatchWrapper(checkUpdateContactData),
};
