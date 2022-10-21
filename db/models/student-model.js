const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user-model');
const { CAREER_TABLE } = require('./career-model');
const STUDENT_TABLE = 'students';

const StudentModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  surName: {
    field: 'sur_name',
    allowNull: false,
    type: DataTypes.STRING,
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  semester: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
  sex: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
  careerId: {
    field: 'career_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    referemces: {
      model: CAREER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
    unique: true,
    references:{
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Student extends Model{
  static associate(models){
    this.belongsTo(models.User, {as: 'user'});
    this.belongsTo(models.Career, {as: 'career'});
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: STUDENT_TABLE,
      model: 'Student',
      timestamp: false
    }
  }
}

module.exports = {
  Student,
  StudentModel,
  STUDENT_TABLE
};
