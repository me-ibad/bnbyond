const Joi = require('joi');

const registerSchemaEmail = Joi.object({
  email: Joi.string().email().lowercase().required(),

  fname: Joi.string().required(),
  lname: Joi.string().required(),
  bday: Joi.string().allow(''),
  username: Joi.string().required(),
  pass: Joi.string().required().min(8),
  pic: Joi.string().required(),
  gender: Joi.string().allow(''),
});

module.exports = registerSchemaEmail;
