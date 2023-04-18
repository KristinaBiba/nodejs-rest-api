const { User } = require("../../service");

const { AppError, tryCatchWrapper } = require("../../utils");

const checkUserVerify = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError(400, "missing required name field"));
  }

  const currentUser = await User.findOne({ email });

  if (!currentUser)
    return next(
      new AppError(401, "Please go through the verification procedure")
    );

  if (currentUser.verify) {
    return next(new AppError(400, "Verification has already been passed"));
  }

  req.user = currentUser;

  next();

  return;
};

module.exports = { checkUserVerify: tryCatchWrapper(checkUserVerify) };
