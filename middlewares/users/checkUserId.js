const { isValidObjectId } = require("mongoose");
const { User } = require("../../service");
const { AppError, tryCatchWrapper } = require("../../utils");

const checkUserId = async (req, res, next) => {
  const { id } = req.body;

  if(!isValidObjectId(id)) {next(new AppError(400, `${id} is not valid id`));}

  const currentUser = await User.findOne({ _id: id});

  if (!currentUser) return next(new AppError(404, "Not found"));

  req.user = currentUser;

  next();
};

module.exports = { checkUserId: tryCatchWrapper(checkUserId) };
