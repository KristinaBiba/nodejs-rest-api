const { AppError } = require("../../utils");

const currentUserdata = async (user) => {
  try {
    const currentUser = user;
    
    return {
      email: currentUser.email,
      subscription: currentUser.subscription,
    };
  } catch (error) {
    return new AppError(500, error);
  }
};

module.exports = currentUserdata;
