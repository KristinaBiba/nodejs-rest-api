const { tryCatchWrapper } = require("../../utils");
const {sendEmail} = require("../../service");

const sendVerificationEmailController = async (req, res) => {
  const { email, verificationToken } = req.user;

  await sendEmail(email, verificationToken);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = {
  sendVerificationEmailController: tryCatchWrapper(
    sendVerificationEmailController
  ),
};
