const { tryCatchWrapper } = require("../../utils");
const checkVerificationToken = require("../../models/users/checkVerificationToken");

const checkVerificationTokenController = async (req, res) => {
  const currentUser = await checkVerificationToken(req.params);
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
