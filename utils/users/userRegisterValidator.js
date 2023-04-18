const Joi = require("joi");

const userRegisterValidator = (body) =>
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

module.exports = {userRegisterValidator, userUpdateValidator};
