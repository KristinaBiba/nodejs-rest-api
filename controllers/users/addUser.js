const { addUser } = require("../../models");

const addUserController = async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.status(201).json({user: newUser});
  } catch (error) {}
};

module.exports = addUserController;