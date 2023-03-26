const { AppError } = require("../../utils");
const {userSubscriptinRole} = require('../../service');

const checkUserSub = async (req, res, next) => {
  try {
    const { subscription } = req.body;
    console.log(userSubscriptinRole);
    const correctSub = userSubscriptinRole.Object.key();

    console.log(correctSub);
   
    const checkSub = correctSub.find(item => item === subscription);

    if(!checkSub) return next(new AppError(400, "Invalid subscription"));
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUserSub;