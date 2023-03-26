const { AppError } = require("../../utils");

const currentUserdata = async (user) => {
  try {
    const currentUser = user;

    currentUser.password = undefined;
    currentUser.updated_at = undefined;
    currentUser.__v = undefined;
    currentUser.token = undefined;
    
    return {
      email: currentUser.email,
      subscription: currentUser.subscription,
    };
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = currentUserdata;
