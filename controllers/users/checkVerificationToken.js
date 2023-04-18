const { tryCatchWrapper } = require("../../utils");
const { User } = require("../../service");

const checkVerificationTokenController = async (req, res) => {
  const currentUser = await User.findOneAndUpdate(req.params, {verificationToken: null,
    verify: true});
  
  if (!currentUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "Verification successful" });
};
module.exports = {
  checkVerificationTokenController: tryCatchWrapper(
    checkVerificationTokenController
  ),
};
