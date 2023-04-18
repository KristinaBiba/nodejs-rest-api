const { Contact } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const changeFildFavorite = async (req, res) => {

  const { favorite } = req.body;

  const updatedContact = await Contact.findByIdAndUpdate(
    { _id: req.contact._id },
    { favorite },
    { new: true }
  );

    res.status(200).json(updatedContact);  
};

module.exports = {changeFildFavorite: tryCatchWrapper(changeFildFavorite)};
