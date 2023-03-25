const { User } = require("../../service");
const { AppError } = require("../../utils");

const listUsersEmail = async () => {
    try {
      return await User.find().select("email");
    } catch (error) {
      return new AppError(500, error);
    }
  };

const checkUniqueEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    const allUsersEmail = await listUsersEmail();
   
    const checkEmail = allUsersEmail.find(item => item.email === email);

    if(checkEmail) return next(new AppError(409, "Email in use"));
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUniqueEmail;