const { User } = require("../../service");
const { AppError, tryCatchWrapper } = require("../../utils");

const checkUserId = async (req, res, next) => {
  const { id } = req.body;

  const usersList = await User.find();

  const currentUser = usersList.find((user) => user.id === id);

  if (!currentUser) return next(new AppError(404, "Not found"));

  next();
};

module.exports = { checkUserId: tryCatchWrapper(checkUserId) };
