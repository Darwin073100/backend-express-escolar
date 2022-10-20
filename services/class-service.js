const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class ClassService{

  // metodo para consultar las class
  async findAll(){
    const classes = await models.Class.findAll();
    return classes;
  }

  async addItem(data){
    const newItem = await models.ClassStudent.create(data);
    return newItem;
  }

  // metodo para consultar una class
  async findOne(id){
    const clas = await models.Class.findByPk(id, {
      include: ['items']
    });
    if(!clas){
      throw boom.notFound('Class not found');
    }
    return clas;
  }

  // metodo para crear class
  async create(data){
    const newClass = await models.Class.create(data);
    return newClass;
  }

  // metodo para actualizar una class
  async upDate(id, change){
    const clas = await this.findOne(id);
    const data = await clas.update(change);
    return data;
  }

  // metodo para eliminar una class
  async delete(id){
    const clas = await this.findOne(id);
    await clas.destroy();
    return { id }
  }

}

module.exports =  ClassService;
