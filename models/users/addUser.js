const { User } = require("../../service");
const { AppError } = require("../../utils");

const gravatar = require('gravatar');

const addUser = async ({ email, password }) => {
  try {
    const url = gravatar.url(email,  {s: '200', r: 'g', d: 'identicon'})

    const newUser = await User.create({
      email,
      password,
      avatarURL: url,
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
