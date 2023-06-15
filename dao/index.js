const { Sequelize, DataTypes } = require("sequelize");
import * as dotenv from 'dotenv'
dotenv.config();

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>

const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}
  @${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`

const sequelize = new Sequelize(CADENA_CONEXION)

const turista = sequelize.define("turista", {
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
    allowNull: true
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
}, {
  timestamps: false,
  freezeTableName: true
})
const guia = sequelize.define("guia", {
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
    allowNull: true
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
}, {
  timestamps: false,
  freezeTableName: true
})

const servicio = sequelize.define("servicio", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  id_guia: {
    type: DataTypes.UUID,
    allowNull: false
  },
  monto: {
    type: DataTypes.DOUBLE,
    allowNull: true
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
  }

},
  {
    timestamps: false,
    freezeTableName: true
})

const reserva = sequelize.define("reserva", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  turista_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  servicio_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
},
  {
    timestamps: false,
    freezeTableName: true
})

// Relaciones
//reporte *-------->1 usuario
servicio.belongsTo(guia, {
  foreignKey: "id"
})

guia.hasMany(servicio, {
  foreignKey: "id_guia"
})

turista.belongsTo(reserva, {
  foreignKey: "id"
})

reserva.hasMany(turista, {
  foreignKey: "id"
})

module.exports = { turista, guia, servicio, reserva}