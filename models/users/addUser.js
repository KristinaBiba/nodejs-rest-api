const { User } = require("../../service");
const { sendEmail } = require("../../service");

const { v4: uuidv4 } = require("uuid");

const gravatar = require("gravatar");

const addUser = async ({ email, password }, res) => {
  try {
    const url = gravatar.url(email, { s: "200", r: "g", d: "identicon" });

    const verificationToken = uuidv4();

    const verificationLink = `http:localhost:3000/api/users/verify/${verificationToken}`;

    const newUser = await User.create({
      email,
      password,
      avatarURL: url,
      verificationToken,
    });

    await sendEmail(email, verificationLink);

    return {
      email: newUser.email,
      subscription: newUser.subscription,
    };
  } catch (error) {
    return res.status(500).json({
      status: "error",
      code: 500,
      message: "Error",
    });
  }
};
module.exports = addUser;
