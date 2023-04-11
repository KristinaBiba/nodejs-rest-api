const { Contact } = require("../../service");
const { tryCatchWrapper } = require("../../utils");

const changeContactController = async (req, res) => {
    const { name, email, phone, favorite } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      { _id: req.contact._id },
      { name, email, phone, favorite },
      { new: true }
    );

    res.status(200).json(updatedContact);

};

module.exports = {changeContactController: tryCatchWrapper(changeContactController)};
