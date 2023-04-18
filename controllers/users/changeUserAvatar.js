const { tryCatchWrapper, saveUploadFile } = require("../../utils");
const { User } = require("../../service");


const changeUserAvatarController = async (req, res) => {
  const { mimetype, path: temporaryName } = req.file;

  const URL = await saveUploadFile(req.user, mimetype, temporaryName, "avatars");

  const currentUser = await User.findByIdAndUpdate(
      req.user.id,
      { avatarURL: URL },
      { new: true }
    );

    res.status(200).json({ avatarURL: currentUser.avatarURL });
};

module.exports = {changeUserAvatarController: tryCatchWrapper(changeUserAvatarController)};
