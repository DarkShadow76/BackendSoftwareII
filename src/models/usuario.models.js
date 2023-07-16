import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const usuario = sequelize.define('usuario', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
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
    allowNull: false,
    defaultValue: "7777777"
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
    timestamps: false,
    freezeTableName: true
  }
);