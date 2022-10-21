const Joi = require('joi');

const id = Joi.number().integer();
const password = Joi.string().min(8);
const userName = Joi.string();
const email = Joi.string().email();

const createUserSchema = Joi.object({
  password: password.required(),
  userName: userName.required(),
  email: email.required()
});

const getUserSchema = Joi.object({
  id: id.required()
});

const upDateUserSchema = Joi.object({
  password,
  userName,
  email,
});

module.exports = { getUserSchema, createUserSchema, upDateUserSchema };
