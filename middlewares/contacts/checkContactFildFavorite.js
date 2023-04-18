const { AppError, tryCatchWrapper, contactChangeFavoriteSchema } = require("../../utils");

const checkContactFildFavorite = async (req, res, next) => {
  const { favorite } = req.body;

  if (favorite === undefined) {
    return next(new AppError(400, "missing field favorite"));
  }

  const { error } = contactChangeFavoriteSchema(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  next();
};

module.exports = {
  checkContactFildFavorite: tryCatchWrapper(checkContactFildFavorite),
};
