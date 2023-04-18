const { AppError, tryCatchWrapper } = require("../../utils");
const { userSubscriptinRole } = require("../../service");

const checkAccessRights = async (req, res, next) => {
  const { subscription } = req.user;
  
  if (subscription !== userSubscriptinRole.ADMIN) return next(new AppError(403, "No access!!!"));

  next();
};

module.exports = { checkAccessRights: tryCatchWrapper(checkAccessRights) };