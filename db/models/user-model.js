const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  }
}

class User extends Model{

  static associate(models){
    this.hasOne(models.Student, {
      as: 'student',
      foreignKey: 'userId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserModel, User };
