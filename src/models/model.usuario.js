const { Model, DataTypes, STRING } = require('sequelize');
const { sequelize } =  require('../database/database');

class usuario extends Model { }

usuario.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      //autoIncrement: true,
      defaultValue: sequelize.UUIDV4
    },
    nombre: {
      type: STRING(100),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dni:{
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contrasenia: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuario',
  }
);

module.exports = usuario;