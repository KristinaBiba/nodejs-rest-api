const { AppError, tryCatchWrapper } = require("../../utils");
const { userSubscriptinRole } = require("../../service");

const checkUserSub = async (req, res, next) => {
  const { subscription } = req.body;
  const correctSub = Object.values(userSubscriptinRole);

  const checkSub = correctSub.find((item) => item === subscription);

  if (!checkSub) return next(new AppError(400, "Invalid subscription"));

  next();
};

module.exports = { checkUserSub: tryCatchWrapper(checkUserSub) };
