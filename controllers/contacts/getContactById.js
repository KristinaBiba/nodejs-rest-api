const { tryCatchWrapper } = require("../../utils");

const getByIdController = async (req, res) => {
    
    res.status(200).json(req.contact);
};

module.exports = {getByIdController: tryCatchWrapper(getByIdController)};
