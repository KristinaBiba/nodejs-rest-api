const { User } = require("../../service");

const { AppError } = require("../../utils");

const addUser = async ({ email, password }) => {
  try {
    const newUser = await User.create({
      email,
      password,
    });

    return {
      email: newUser.email,
      subscription: newUser.subscription,
    };
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = addUser;
