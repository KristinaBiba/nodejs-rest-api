const { Contact } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const getAllController = async (req, res) => {
    const { limit, page, favorite} = req.query;

    const filterRow = favorite
    ? { favorite: favorite, owner: req.user.id }
    : {owner: req.user.id};
    
    const paginationPage = +page || 1;
    const paginationLimit = +limit || 5;
    const skip = (paginationPage - 1) * paginationLimit;

    const contacts = await Contact.find(filterRow).select("-__v").skip(skip).limit(paginationLimit);
  
    res.status(200).json(contacts);
};

module.exports = {getAllController: tryCatchWrapper(getAllController)};
