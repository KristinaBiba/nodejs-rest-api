const { User } = require("../../service");
const { AppError } = require("../../utils");

const checkUserId = async (req, res, next) => {
  try {
    const { id } = req.body;

    const usersList = await User.find();  

    const currentUser = usersList.find((user) => user.id === id);

    if(!currentUser) return next(new AppError(404, "Not found"));
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUserId;