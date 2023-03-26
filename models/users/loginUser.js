const { createJWT, User } = require("../../service");
const { AppError } = require("../../utils");

const loginUser = async (user) => {
  try {
    const currentUser = user;

    const token = await createJWT(currentUser._id);

    await User.findByIdAndUpdate(currentUser._id, {token})

    currentUser.password = undefined;
    currentUser.updated_at = undefined;
    currentUser.__v = undefined;
    currentUser.token = undefined;
    
    return {user: currentUser, token};
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = loginUser;
