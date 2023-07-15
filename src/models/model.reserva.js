import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const reserva = sequelize.define({
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
  id_turista: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_servicio: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  timestamps: true,
  freezeTableName: true
})