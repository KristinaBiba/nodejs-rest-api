const { AppError } = require("../../utils");

const checkUpdateContactData = async (req, res, next) => {
    try {
      const { name, email, phone } = req.body;
  
      if (!name && !email && !phone) {
        return next(new AppError(400, "missing fields"));
      }
   
      return next();
    } catch (error) {
      next(error);
    }
  };
  module.exports = checkUpdateContactData;