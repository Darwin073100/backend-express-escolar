const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const surName = Joi.string();
const age = Joi.number().integer();
const image = Joi.string().uri();
const semester = Joi.number().integer().min(1);
const sex = Joi.string().max(1);
const idCareer = Joi.number().integer();
const idUser = Joi.number().integer();

const createStudentSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  surName: surName.required(),
  age: age.required(),
  image: image.required(),
  semester: semester.required(),
  sex: sex.required(),
  idCareer: idCareer.required(),
  idUser: idUser.required()
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
  idCareer: idCareer,
  idUser: idUser
});

module.exports = { getStudentSchema, createStudentSchema, upDateStudentSchema };
