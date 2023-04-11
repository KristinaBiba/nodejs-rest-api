const {
  AppError,
  userRegisterValidator,
  tryCatchWrapper,
} = require("../../utils");

const checkUserData = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError(400, "missing required name field"));
  }

  const { error } = userRegisterValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  next();
};

module.exports = { checkUserData: tryCatchWrapper(checkUserData) };
