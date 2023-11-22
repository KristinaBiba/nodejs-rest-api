const {
  AppError,
  userRegisterValidator,
  tryCatchWrapper,
} = require("../../utils");

const checkUserData = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return next(new AppError(400, `Missing required field ${!email || !password || !name}`));
  }

  const { error } = userRegisterValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  next();
};

module.exports = { checkUserData: tryCatchWrapper(checkUserData) };
