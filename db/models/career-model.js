const { Model, DataTypes } = require('sequelize');

const CAREER_TABLE = 'careers';

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
    this.hasMany(models.Student,{
      as: 'student',
      foreignKey: 'careerId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CAREER_TABLE,
      modelName: 'Career',
      timestamp: true,
      underscored: true,
    }
  }
}

module.exports = {
  Career,
  CareerModel,
  CAREER_TABLE
};

