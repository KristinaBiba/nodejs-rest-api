const { tryCatchWrapper } = require("../../utils");
const sendEmail = require("../../service");

const sendVerificationEmailController = async (req, res) => {
  const { email, verificationToken } = req.user;

  const verificationLink = `http:localhost:3000/users/verify/${verificationToken}`;

  await sendEmail(email, verificationLink);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = {
  sendVerificationEmailController: tryCatchWrapper(
    sendVerificationEmailController
  ),
};
