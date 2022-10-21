const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class UserService{
  constructor(){}

  async findAll(){
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id){
    const user = await models.User.findByPk(id,{
      include: ['student']
    });
    if(!user){
      throw boom.notFound('User not found');
    }
    return user;
  }

  async create(data){
    const res = await models.User.create(data);
    return res;
  }

  async upDate(id, data){
    const user = await this.findOne(id);
    const res = await user.update(data);
    return res;
  }

  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }

}

module.exports = UserService;
