const { Model, DataTypes, Sequelize } = require('sequelize');

const CLASS_TABLE = 'class';

const ClassSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  credits: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
};

class Class extends Model{
  static config(sequelize){
    return{
      sequelize,
      tableName: CLASS_TABLE,
      modelName: 'Class',
      timestamps: false
    }
  }
}

module.exports  = { CLASS_TABLE, ClassSchema, Class };
