const { AppError, tryCatchWrapper } = require("../../utils");
const { User } = require("../../service");
const uuid = require("uuid").v4;
const path = require("path");
const fs = require("fs").promises;
const Jimp = require("jimp");

const changeUserAvatarController = async (req, res, next) => {
  const { mimetype, path: temporaryName } = req.file;

  const storeAvatar = path.join(process.cwd(), "public/avatars");

  const ext = mimetype.split("/")[1];
  const fileName = `${req.user.id}-${uuid()}.${ext}`;
  const pathFile = path.join(storeAvatar, fileName);
  try {
    await Jimp.read(temporaryName)
      .then((image) => {
        return image.resize(250, 250).write(pathFile);
      })
      .catch((err) => {
        return next(new AppError(401, err.massage));
      });
    await fs.unlink(temporaryName);
    const URL = path.join("/avatars", fileName);
    const currentUser = await User.findByIdAndUpdate(
      req.user.id,
      { avatarURL: URL },
      { new: true }
    );
    res.status(200).json({ avatarURL: currentUser.avatarURL });
  } catch (err) {
    await fs.unlink(temporaryName);
    return next(new AppError(401, "Not authorized"));
  }
};

module.exports = {changeUserAvatarController: tryCatchWrapper(changeUserAvatarController)};
