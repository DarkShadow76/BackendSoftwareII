import { Sequelize, DataTypes } from "sequelize"
import { sequelize } from "../database/database.js";

export const compra = sequelize.define('compra', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  id_servicio: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_turista: {
    type: DataTypes.UUID,
    allowNull: false
  }
},
  {
    timestamps: false,
    freezeTableName: true
  }
);