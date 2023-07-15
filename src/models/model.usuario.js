import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//const { Sequelize, DataTypes } = require("sequelize");
//sequelize.define()

export const usuario = sequelize.define('usuario', {
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
  dni: {
    type: DataTypes.STRING(10),
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
    type: DataTypes.UUID,
    allowNull: true
  },
  id_servicio: {
    type: DataTypes.UUID,
    allowNull: true
  }
},
  {
    timestamps: true,
    freezeTableName: true
  }
);

//export default usuario;

//module.exports = { usuario }