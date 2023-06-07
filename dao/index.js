const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>


const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
    "postgres://postgres:postgres@localhost:5432/postgres"

const sequelize = new Sequelize(CADENA_CONEXION)

const turista = sequelize.define("turista", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
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

const tour = sequelize.define("tour", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    id_turista: {
        type: DataTypes.UUID,
        allowNull: false
    },
    id_guia: {
        type: DataTypes.UUID,
        allowNull: false
    },
    id_zona: {
        type: DataTypes.UUID,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    guia_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
},
    {
        timestamps: false,
        freezeTableName: true
})
// Relaciones
//reporte *-------->1 usuario
guia.belongsTo(tour, {
    foreignKey: "id"
})

turista.belongsTo(tour, {
    foreignKey: "id"
})

module.exports = { turista, guia, tour }