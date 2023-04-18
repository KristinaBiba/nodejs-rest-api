const {
    AppError,
    userUpdateValidator,
    tryCatchWrapper,
  } = require("../../utils");
  
  const checkUserUpdateData = async (req, res, next) => {
    const { email } = req.body;
  
    if (!email) {
      return next(new AppError(400, "missing required name field"));
    }
  
    const { error } = userUpdateValidator(req.body);
  
    if (error) return next(new AppError(400, error.details[0].message));
  
    next();
  };
  
  module.exports = { checkUserUpdateData: tryCatchWrapper(checkUserUpdateData) };
  