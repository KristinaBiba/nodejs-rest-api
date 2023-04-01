const { schema } = require("./contacts");
const { userRegisterValidator } = require("./users");

const AppError = require("./appError");

module.exports = {
  schema,
  AppError,
  userRegisterValidator,
};
