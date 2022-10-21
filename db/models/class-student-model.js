const { Model, DataTypes, Sequelize } = require('sequelize');

const { CLASS_TABLE } = require('./class-model');
const { STUDENT_TABLE, Student } = require('./student-model');

const CLASS_STUDENT_TABLE = 'classes_students';

const ClassStudentModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  studentId:{
    field: 'student_id',
    allowNull: false.valueOf,
    type: DataTypes.INTEGER,
    references: {
      model: STUDENT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  classId:{
    field: 'class_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLASS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class ClassStudent extends Model{
  static asociate(models){
    // Associations
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CLASS_STUDENT_TABLE,
      modelName: 'ClassStudent',
      timestamps: false
    }
  }
}

module.exports = {
  ClassStudent,
  ClassStudentModel,
  CLASS_STUDENT_TABLE
};
