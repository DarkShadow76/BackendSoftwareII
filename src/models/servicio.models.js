import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const servicio = sequelize.define('servicio',{
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  monto: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  puntaje: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  id_guia: {
    type: DataTypes.UUID,
    allowNull: false,
  }
},
  {
    timestamps: false,
    freezeTableName: true
  }
);