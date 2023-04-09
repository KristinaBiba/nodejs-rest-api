const { User } = require("../../service");

const { AppError } = require("../../utils");

const checkUserLoginData = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const currentUser = await User.findOne({ email }).select("+password");

    if (!currentUser)
      return next(new AppError(401, "Email or password is wrong"));

    const isPassvordValid = await currentUser.checkPassword(
      password,
      currentUser.password
    );

    if (!isPassvordValid)
      return next(new AppError(401, "Email or password is wrong"));
    
    if(!currentUser.verify) {
      return next(new AppError(401, "Please verify your email!"));
    }

    req.user = currentUser;

    next();

    return;
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = checkUserLoginData;
