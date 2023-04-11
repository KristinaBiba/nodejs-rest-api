const { AppError } = require("../../utils");
const {User} = require("../../service")

const checkVerificationToken = async (params) => {
    try {
    const currentUser = await User.findOneAndUpdate(params, {verificationToken: null,
        verify: true});
    return currentUser;
    } catch (error) {return new AppError(500, error.massage);}
};

module.exports = checkVerificationToken;