const boom = require('@hapi/boom');

function logErrors(err, req, res, next){
  next(err);
}

function errorHandlre(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.playload);
  }
  next(next);
}

module.exports = { logErrors, errorHandlre, boomErrorHandler };

