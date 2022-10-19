const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const ages = Joi.number().integer();
const code = Joi.number().integer();

const createCareerSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  ages: ages.required(),
  code: code.required()
});

const getCareerSchema = Joi.object({
  id: id.required()
});

const upDateCareerSchema = Joi.object({
  name: name,
  ages: ages,
  code: code
});

module.exports = { createCareerSchema, getCareerSchema, upDateCareerSchema };
