const AppError = require("../../utils");

const checkContactFildFavorite = async (req, res, next) => {
  try {
    const { favorite } = req.body;

    if (favorite === undefined) {
      return next(new AppError(400, "missing field favorite"));
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkContactFildFavorite;
