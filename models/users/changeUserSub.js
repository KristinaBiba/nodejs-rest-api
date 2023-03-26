const { User } = require("../../service");

const { AppError } = require("../../utils");

const changeUserSub = async ({ id, subscription }) => {
  try {
    const currentUser = await User.findByIdAndUpdate(id, {subscription: subscription});

    currentUser.password = undefined;
    currentUser.__v = undefined;

    return currentUser;
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = changeUserSub;