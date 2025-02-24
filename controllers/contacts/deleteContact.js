const { Contact } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const deleteController = async (req, res) => {

    await Contact.findByIdAndDelete(req.contact._id);
    
    res.status(200).json({ message: "contact deleted", id: req.contact._id });

};

module.exports = {deleteController: tryCatchWrapper(deleteController)};
