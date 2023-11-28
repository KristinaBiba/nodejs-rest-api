const { AppError } = require("../../utils");
const jwt = require("jsonwebtoken");
const { User } = require("../../service");

const checkToken = async (req, res, next) => {

  const token = req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1];

  if (!token) return next(new AppError(401, 'Not authorized'));

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) {
    return next(new AppError(401, 'Not authorized'));
  }

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) return next(new AppError(401, 'Not authorized'));
  if (currentUser.token === null) return next(new AppError(401, 'Not authorized'));

  req.user = currentUser;

  next();
}

module.exports = checkToken;