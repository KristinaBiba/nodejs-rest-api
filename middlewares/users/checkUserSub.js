const { AppError } = require("../../utils");
const {userSubscriptinRole} = require('../../service');

const checkUserSub = async (req, res, next) => {
  try {
    const { subscription } = req.body;
    const correctSub = Object.values(userSubscriptinRole);
   
    const checkSub = correctSub.find(item => item === subscription);

    if(!checkSub) return next(new AppError(400, "Invalid subscription"));
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUserSub;