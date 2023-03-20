const { AppError, schema } = require("../../utils");

const checkContactData = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return next(new AppError(400, "missing required name field"));
    }

    const { error } = schema(req.body);

    if (error) return next(new AppError(400, error.details[0].message));

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkContactData;
