const uuid = require("uuid").v4;
const path = require("path");
const fs = require("fs").promises;
const Jimp = require("jimp");
const AppError = require("./appError");

const saveUploadFile = async (user, mimetype, temporaryName, currentFolder) => {
  const storeAvatar = path.join(process.cwd(), "public", currentFolder);

  const ext = mimetype.split("/")[1];
  const fileName = `${user.id}-${uuid()}.${ext}`;
  const pathFile = path.join(storeAvatar, fileName);

  try {
    await Jimp.read(temporaryName)
      .then((image) => {
        return image.resize(250, 250).write(pathFile);
      })
      .catch((err) => {
        return new AppError(401, err.massage);
      });

    await fs.unlink(temporaryName);

    const URL = path.join("/", currentFolder, fileName);

    return URL;
  } catch (err) {
    await fs.unlink(temporaryName);
    return new AppError(401, "Not authorized");
  }
};

module.exports = saveUploadFile;
