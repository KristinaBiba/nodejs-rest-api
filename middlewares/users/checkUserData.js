const { AppError, userRegisterValidator } = require("../../utils");

const checkUserData = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError(400, "missing required name field"));
    }

    const { error } = userRegisterValidator(req.body);

    if (error) return next(new AppError(400, error.details[0].message));
    

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUserData;