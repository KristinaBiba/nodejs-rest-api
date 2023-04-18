const { User } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const changeUserSubController = async (req, res) => {
  const { id, subscription } = req.body;

  const currentUser = await User.findByIdAndUpdate(
    id,
    { subscription: subscription },
    { new: true }
  );

  res
    .status(200)
    .json({ email: currentUser.email, subscription: currentUser.subscription });
};

module.exports = {
  changeUserSubController: tryCatchWrapper(changeUserSubController),
};
