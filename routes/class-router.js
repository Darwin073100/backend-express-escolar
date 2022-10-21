const express = require('express');
const ClassService = require('../services/class-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createClassSchema,
  upDateClassSchema,
  getClassSchema,
  addItemsSchema
} = require('../schemas/class-schema');

const router = express.Router();
const service = new ClassService();

router.get('/', async(req, res)=>{
  const classes = await service.findAll();
  res.json(classes);
});

router.get('/:id',
  validatorHandler(getClassSchema, 'params'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const clas = await service.findOne(id);
      res.json(clas);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createClassSchema, 'body'),
  async(req, res, next)=>{
    try {
      const body = req.body;
      const newClass = await service.create(body);
      res.status(201).json(newClass);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/item',
  validatorHandler(addItemsSchema, 'body'),
  async(req, res, next)=>{
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getClassSchema, 'params'),
  validatorHandler(upDateClassSchema, 'body'),
  async(req, res, next)=>{
    try {
      const { id } = req.params;
      const body = req.body;
      const clas = await service.upDate(id, body);
      res.json(clas);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getClassSchema, 'params'),
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
