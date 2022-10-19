const express = require('express');

const classRouter = require('./class-router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/classes', classRouter);
}

module.exports = routerApi;
