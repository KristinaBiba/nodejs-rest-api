const { User } = require("../../service");
const { AppError, tryCatchWrapper } = require("../../utils");

const checkUniqueEmail = async (req, res, next) => {
  const { email } = req.body;

  const checkEmail = await User.findOne({ email });

  if (checkEmail) return next(new AppError(409, "Email in use"));

  next();
};

module.exports = { checkUniqueEmail: tryCatchWrapper(checkUniqueEmail) };
