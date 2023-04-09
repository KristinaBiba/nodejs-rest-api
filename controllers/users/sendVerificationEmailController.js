const { AppError } = require("../../utils");
const sendEmail = require("../../service");

const sendVerificationEmailController = async (req, res) => {
try{
    const {email, verificationToken} = req.user;

    const verificationLink = `http:localhost:3000/users/verify/${verificationToken}`
    
    await sendEmail(email, verificationLink);

    res.status(200).json({message: 'Verification email sent'});
  } catch (error) {return new AppError(500, error.massage);}
}

module.exports = sendVerificationEmailController;