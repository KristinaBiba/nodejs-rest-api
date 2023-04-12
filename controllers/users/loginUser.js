const { tryCatchWrapper } = require("../../utils");
const { createJWT, User } = require("../../service");

const loginUserController = async (req, res) => {
  const { email, id, subscription } = req.user;

  const token = await createJWT(id);

  await User.findByIdAndUpdate(id, { token });

  res.status(200).json({
    user: {
      email,
      subscription,
    },
    token,
  });
};

module.exports = { loginUserController: tryCatchWrapper(loginUserController) };
