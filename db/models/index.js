const { Class, ClassSchema } = require('./class-model');

function setupModels(sequelize){
  Class.init(ClassSchema, Class.config(sequelize));
}

module.exports = setupModels;
