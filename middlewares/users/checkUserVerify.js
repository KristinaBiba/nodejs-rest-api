const { User } = require("../../service");

const { AppError } = require("../../utils");

const checkUserVerify = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
        return next(new AppError(400, "missing required name field"));
      }

    const currentUser = await User.findOne({ email });
    
    if (!currentUser)
      return next(new AppError(401, "Please go through the verification procedure"));

    if(currentUser.verify) {
      return next(new AppError(400, "Verification has already been passed"));
    }

    req.user = currentUser;

    next();

    return;
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = checkUserVerify;
