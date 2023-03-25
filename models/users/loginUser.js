const { AppError } = require("../../utils");

const loginUser = async (user) => {
  try {
    const currentUser = user;

    currentUser.password = undefined;
    currentUser.updated_at = undefined;
    currentUser.__v = undefined;

    return currentUser;
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = loginUser;
