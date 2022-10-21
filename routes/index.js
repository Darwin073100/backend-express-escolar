const express = require('express');

const classRouter = require('./class-router');
const careerRouter = require('./career-router');
const studentRouter = require('./student-router');
const userRouter = require('./user-router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/classes', classRouter);
  router.use('/careers', careerRouter);
  router.use('/students', studentRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
