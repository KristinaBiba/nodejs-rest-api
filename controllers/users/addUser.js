const { tryCatchWrapper } = require("../../utils");
const { User } = require("../../service");
const { sendEmail } = require("../../service");

const { v4: uuidv4 } = require("uuid");

const gravatar = require("gravatar");

const addUserController = async (req, res) => {
  const { email, password, name } = req.body;

  const url = gravatar.url(email, { s: "200", r: "g", d: "identicon" });

  const verificationToken = uuidv4();

  const newUser = await User.create({
    name,
    email,
    password,
    avatarURL: url,
    verificationToken,
  });

  await sendEmail(email, verificationToken);

  res
    .status(201)
    .json({ email: newUser.email, subscription: newUser.subscription });
};

module.exports = { addUserController: tryCatchWrapper(addUserController) };
