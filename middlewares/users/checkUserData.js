const {
  AppError,
  userRegisterValidator,
  tryCatchWrapper,
  userLoginValidator,
} = require("../../utils");

const checkUserRegisterData = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return next(
      new AppError(
        400,
        `Missing required field ${!email || !password || !name}`
      )
    );
  }

  const { error } = userRegisterValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  next();
};

const checkUserLoginData = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password ) {
    return next(
      new AppError(
        400,
        `Missing required field ${!email || !password}`
      )
    );
  }

  const { error } = userLoginValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  next();
};

module.exports = {
  checkUserRegisterData: tryCatchWrapper(checkUserRegisterData),
  checkUserLoginData: tryCatchWrapper(checkUserLoginData),
};
