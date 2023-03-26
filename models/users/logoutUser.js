const { User } = require("../../service");
const { AppError } = require("../../utils");

const logoutUser = async (id) => {
  try {
    await User.findByIdAndUpdate(id, {token: null})
    console.log(id.token);

    return;
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = logoutUser;
