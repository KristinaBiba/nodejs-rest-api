const { addUser } = require("../../models");
const { tryCatchWrapper } = require("../../utils");

const addUserController = async (req, res) => {
    console.log("addUserController");
    const newUser = await addUser(req.body, res);
    res.status(201).json({user: newUser});

};

module.exports = {addUserController: tryCatchWrapper(addUserController)};