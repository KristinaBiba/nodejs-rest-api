const { User } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const updateUserController = async (req, res) => {
    const {email} = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.user._id },
      { email },
      { new: true }
    );

    res.status(200).json({ email: updatedUser.email });
        
};

module.exports = {updateUserController: tryCatchWrapper(updateUserController)};
