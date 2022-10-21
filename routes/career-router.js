const express = require('express');
const CareerService = require('../services/career-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createCareerSchema,
  upDateCareerSchema,
  getCareerSchema
} = require('../schemas/career-schema');

const router = express.Router();
const service = new CareerService();

router.get('/', async(req, res)=>{
  const careers = await service.findAll();
  res.json(careers);
});

router.get('/:id',
  validatorHandler(getCareerSchema, 'params'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const career = await service.findOne(id);
      res.json(career);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCareerSchema, 'body'),
  async(req, res, next)=>{
    try {
      const body = req.body;
      const newCareer = await service.create(body);
      res.status(201).json(newCareer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCareerSchema, 'params'),
  validatorHandler(upDateCareerSchema, 'body'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const body = req.body;
      const career = await service.upDate(id, body);
      res.json(career);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCareerSchema, 'params'),
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
