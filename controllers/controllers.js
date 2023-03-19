const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../models/contacts");
const AppError = require("../utils/appError");

const getAllController = async (req, res) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ contacts });
  } catch (error) {
    return error;
  }
};

const getByIdController = async (req, res) => {
  try {
    const contact = await getContactById(req.params.contactId);

    res.status(200).json(contact);
  } catch (error) {
    return error;
  }
};

const deleteController = async (req, res) => {
  try {
    await removeContact(req.params.contactId);
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    return error;
  }
};

const changeContactController = async (req, res) => {
  try {
    const updatedContact = await updateContact(req.params.contactId, req.body);
    res.status(200).json(updatedContact);
  } catch (error) {
    return error;
  }
};

const addContactController = async (req, res) => {
  try {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {}
};

const changeFildFavorite = async (req, res) => {
  try {
    const updatedContact = await updateStatusContact(
      req.params.contactId,
      req.body
    );
    res.status(200).json(updatedContact);
  } catch (error) {
    return new AppError(404, "Not found");
  }
};

module.exports = {
  getAllController,
  getByIdController,
  deleteController,
  changeContactController,
  addContactController,
  changeFildFavorite,
};
