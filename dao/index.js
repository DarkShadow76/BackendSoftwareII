const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>


const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
    "postgres://postgres:postgres@localhost:5432/postgres"
const sequelize = new Sequelize(CADENA_CONEXION)

    const turista = sequelize.define("turista", {
        id : {
            primaryKey : true,
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
        },
        nombre : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        apellido: {
            type : DataTypes.STRING(100),
            allowNull : true
        },  
        correo:{
            type : DataTypes.STRING(100),
            allowNull : false
        },
        contrasena:{
            type: DataTypes.STRING(100),
            allowNull : false
        },
        telefono: {
            type : DataTypes.STRING(20),
            allowNull : false
        },
        id_tour: {
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4,
        }
    }, {
        timestamps : false,
        freezeTableName : true
    })
    const guia = sequelize.define("guia", {
        id : {
            primaryKey : true,
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
        },
        nombre : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        apellido: {
            type : DataTypes.STRING(100),
            allowNull : true
        },  
        correo: {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        contrasena: {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        telefono: {
            type : DataTypes.STRING(20),
            allowNull : false
        },
        id_tour : {
            type : DataTypes.UUIDV4,
            defaultValue : Sequelize.UUIDV4,
            allowNull : true
        },
        id_vehiculo : {
            type : DataTypes.UUIDV4,
            defaultValue : Sequelize.UUIDV4,
            allowNull : false
        },
        calificacion : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    }, {
        timestamps : false,
        freezeTableName : true
    })

    const tour = sequelize.define("tour",{
        id : {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
        },
        id_turista :{
            type : DataTypes.UUID,
            allowNull : false
        },
        id_guia : {
            type : DataTypes.UUID,
            allowNull : false
        },
        id_zona : {
            type : DataTypes.UUID,
            allowNull : false
        },
        fecha : {
            type : DataTypes.DATE,
            allowNull : false
        }
    },
    {
        timestamps : false,
        freezeTableName : true
    })
    const vehiculo = sequelize.define("vehiculo",{
        id : {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
        },
        id_guia : {
            foreignKey : true,
            type : DataTypes.UUID,
            allowNull : false
        },
        placa: {
            type : DataTypes.STRING(10),
            allowNull : false
        },
        tipo: {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        modelo : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        n_asientos : {
            type :DataTypes.INTEGER,
            allowNull :false
        }
    },
    {
        timestamps : false,
        freezeTableName : true
    })
    const zona = sequelize.define("zona",{
        id : {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
        },
        nombre : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        id_tour : {

            type : DataTypes.UUID,
            allowNull : true
        }
    },
    {
        timestamps : false,
        freezeTableName : true
    })

    // Relaciones
    //reporte *-------->1 usuario
    turista.belongsTo(tour,{
        foreignKey : "id_turista"
    })
    guia.belongsTo(tour,{
        foreignKey : "id_guia"
    })
    guia.hasMany(vehiculo,{
        foreignKey : "id_guia"
    })
    tour.hasMany(turista,{
        foreignKey : "id_tour"
    })
    vehiculo.belongsTo(guia,{
        foreignKey : "id_vehiculo"
    })
    zona.hasMany(tour,{
        foreignKey : "id_zona"
    })

    module.exports = { turista, guia, zona, vehiculo, tour}