const Joi = require("joi");

const userRegisterValidator = (body) =>
  Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      "string.base": `Name should be a type of string`,
      "string.min": `Name must contain min 3 simbols`,
      "string.max": `Name must contain max 30 simbols`,
      "string.pattern.base": `"" must be 10 digit number`,
      "any.required": `Name is a required field`
  }),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net", "ua"] },
        })
        .required(),
    password: Joi.string().min(6).max(300).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/).required(),
}).validate(body);

const userLoginValidator = (body) =>
  Joi.object({
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net", "ua"] },
        })
        .required(),
    password: Joi.string().min(6).max(300).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/).required(),
}).validate(body);

const userUpdateValidator = (body) =>
  Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "ua"] },
      }).required(),
  }).validate(body);

module.exports = {userRegisterValidator, userLoginValidator, userUpdateValidator};
