const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CareerService{
  constructor(){}

  async findAll(){
    const careers = await models.Career.findAll();
    return careers;
  }

  async findOne(id){
    const career = await models.Career.findByPk(id,{
      include: ['students']
    });
    if(!career){
      throw boom.notFound('Career not found');
    }
    return career;
  }

  async create(data){
    const res = await models.Career.create(data);
    return res;
  }

  async upDate(id, data){
    const career = await this.findOne(id);
    const res = await career.update(data);
    return res;
  }

  async delete(id){
    const career = await this.findOne(id);
    await career.destroy();
    return { id };
  }

}

module.exports = CareerService;
