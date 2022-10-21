const express = require('express');
const StudentService = require('../services/student-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createStudentSchema,
  upDateStudentSchema,
  getStudentSchema
} = require('../schemas/student-schema');

const router = express.Router();
const service = new StudentService();

router.get('/', async(req, res)=>{
  const students = await service.findAll();
  res.json(students);
});

router.get('/:id',
  validatorHandler(getStudentSchema, 'params'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const student = await service.findOne(id);
      res.json(student);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createStudentSchema, 'body'),
  async(req, res, next)=>{
    try {
      const body = req.body;
      const newStudent = await service.create(body);
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getStudentSchema, 'params'),
  validatorHandler(upDateStudentSchema, 'body'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const body = req.body;
      const student = await service.upDate(id, body);
      res.json(student);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getStudentSchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
