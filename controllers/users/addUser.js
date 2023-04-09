const { addUser } = require("../../models");
const { AppError } = require("../../utils");

const addUserController = async (req, res) => {
  try {
    console.log("addUserController");
    const newUser = await addUser(req.body, res);
    res.status(201).json({user: newUser});
  } catch (error) {return new AppError(500, error.massage);}
};

module.exports = addUserController;