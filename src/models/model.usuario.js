const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } =  require("../database/database");

//sequelize.define()

//class usuario extends Model { }

const usuario = sequelize.define('usuario',{
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      //autoIncrement: true,
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING(100),
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
    },
    tipo: {
      type: DataTypes.ENUM('admin', 'turista', 'guia'),
      allowNull: false,
    },
    id_reserva: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    id_servicio: {
      type: DataTypes.UUIDV4,
      allowNull: true
    }
  }
);

module.exports = usuario