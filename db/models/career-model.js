const { Model, DataTypes, Sequelize } = require('sequelize');

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
}

class Career extends Model{

  static associate(models){
    this.hasMany(models.Student,{
      as: 'students',
      foreignKey: 'careerId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CAREER_TABLE,
      modelName: 'Career',
      timestamp: false,
    }
  }
}

module.exports = {
  Career,
  CareerModel,
  CAREER_TABLE
};

