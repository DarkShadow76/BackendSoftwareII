import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export class reserva extends Model { }

reserva.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: sequelize.UUIDV4
    }
  },
  {
    sequelize,
    modelName: 'reserva',
    tableName: 'reserva',
  }
);

export default reserva;