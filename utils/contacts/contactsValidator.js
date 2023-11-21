const Joi = require("joi");

const contactAddSchema = (body) =>
  Joi.object({
    name: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(12).max(17).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      favorite: Joi.boolean().default(false),
      owner: Joi.string(),
  }).validate(body);

const contactUpdateSchema = (body) =>
  Joi.object({
    name: Joi.string().min(3).max(30),
    phone: Joi.string().min(12).max(17),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
  }).validate(body);

  const contactChangeFavoriteSchema = (body) =>
  Joi.object({
      favorite: Joi.boolean(),
  }).validate(body);
  


module.exports = {contactAddSchema, contactUpdateSchema, contactChangeFavoriteSchema};
