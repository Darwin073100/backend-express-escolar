const { Model, DataTypes, Sequelize } = require('sequelize');

const CAREER_TABLE = 'career';

const CareerModel = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ages: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
  code: {
    allowNull: false,
    type: DataTypes.SMALLINT,
  }
}

class Career extends Model{

  static associate(models){
    this.hasMany(models.User,{
      as: 'user',
      foreignKey: 'userId'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CAREER_TABLE,
      modelName: 'Career',
      timestamp: false
    }
  }
}

module.exports = {
  Career,
  CareerModel,
  CAREER_TABLE
};

