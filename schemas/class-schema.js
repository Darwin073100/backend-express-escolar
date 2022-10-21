const Joi = require('joi');

// Creacion de los campos o atributos con sus ipos de datos
const id = Joi.number().integer();
const name = Joi.string();
const credits = Joi.number().integer().min(4).max(10);
const classId = Joi.number().integer();
const studentId = Joi.number().integer();

// Creacion de la restriccion para crear una nueva class
const createClassSchema = Joi.object({
  name: name.required(),
  credits: credits.required()
});

// Creacion de la restriccion para actualizar una class
const upDateClassSchema = Joi.object({
  name,
  credits
});

// Creacion de la restriccion para consultar una class
const getClassSchema = Joi.object({
  id: id.required(),
});

const addItemsSchema = Joi.object({
  classId: classId.required(),
  studentId: studentId.required()
});


// Exportacion de las reglas
module.exports = { createClassSchema, upDateClassSchema, getClassSchema , addItemsSchema };
