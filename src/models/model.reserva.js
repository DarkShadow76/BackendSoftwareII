import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export class reserva extends Model { }

reserva.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    }
  },
  {
    sequelize,
    modelName: 'reserva',
    tableName: 'reserva',
  }
);

export default reserva;