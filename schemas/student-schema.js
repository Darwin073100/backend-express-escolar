const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const surName = Joi.string();
const age = Joi.number().integer();
const image = Joi.string().uri();
const semester = Joi.number().integer().min(1);
const sex = Joi.string().max(1);
const careerId = Joi.number().integer();
const userId = Joi.number().integer();

const createStudentSchema = Joi.object({
  name: name.required(),
  surName: surName.required(),
  age: age.required(),
  image: image.required(),
  semester: semester.required(),
  sex: sex.required(),
  careerId: careerId.required(),
  userId: userId.required()
});

const getStudentSchema = Joi.object({
  id: id.required()
});

const upDateStudentSchema = Joi.object({
  name: name,
  surName: surName,
  age: age,
  image: image,
  semester: semester,
  sex: sex,
  careerId: careerId,
  userId: userId
});

module.exports = { getStudentSchema, createStudentSchema, upDateStudentSchema };
