const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const credits = Joi.number().integer();

const createClassSchema = Joi.object({
  name: name.required(),
  credits: credits.required()
});

const upDateClassSchema = Joi.object({
  name,
  credits
});

const getClassSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClassSchema, upDateClassSchema, getClassSchema };
