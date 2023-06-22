import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export class servicio extends Model { }

servicio.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    categoria: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    puntaje: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha:{
      type: DataTypes.DATE,
      allowNull: false
    },
    costo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'servicio',
    tableName: 'servicio',
  }
);

export default servicio;