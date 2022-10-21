const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class StudentService{
  constructor(){}

  async findAll(){
    const students = await models.Student.findAll();
    return students;
  }

  async findOne(id){
    const student = await models.Student.findByPk(id,{
      include:['user','career']
    });
    if(!student){
      throw boom.notFound('Student not found');
    }
    return student;
  }

  async create(data){
    const res = await models.Student.create(data,{
      include: ['user']
    });
    return res;
  }

  async upDate(id, data){
    const student = await this.findOne(id);
    const res = await student.update(data);
    return res;
  }

  async delete(id){
    const student = await this.findOne(id);
    await student.destroy();
    return { id };
  }

}

module.exports = StudentService;
