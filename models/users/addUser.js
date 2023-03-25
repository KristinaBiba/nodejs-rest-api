const { User } = require("../../service");

const { AppError } = require("../../utils");

const addUser = async ({ email, password }) => {
  try {
    const newUser = await User.create({
      email,
      password,
    });

    newUser.password = undefined;
    newUser.updated_at = undefined;
    newUser.__v = undefined;

    return newUser;
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = addUser;
