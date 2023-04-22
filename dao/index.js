const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>


const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
    "postgres://postgres:postgres@localhost:5432/postgres"
    const sequelize = new Sequelize(CADENA_CONEXION)
    /*const sequelize = new Sequelize(CADENA_CONEXION,{
        dialectOptions : {
            ssl : {
                require : true,
                rejectUnauthorized : false
            }
        }
    })*/

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
            foreignKey: true,
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
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
            foreignKey: true,
            type : DataTypes.UUIDV4,
            allowNull : true
        },
        id_vehiculo : {
            foreignKey :true,
            type : DataTypes.UUIDV4,
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
            foreignKey : true,
            type : DataTypes.UUID,
            allowNull : false
        },
        id_guia : {
            foreignKey : true,
            type : DataTypes.UUID,
            allowNull : false
        },
        id_zona : {
            foreignKey : true,
            type : DataTypes.UUID,
            allowNull : false
        },
        guia_id: {
            type: DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4,
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

    // Relaciones
    //reporte *-------->1 usuario
    usuario.belongsTo(tour,{
        foreignKey : "usuario_id"
    })
    guia.belongsTo(tour,{
        foreignKey : "guia_id"
    })
    tour.hasMany(usuario,{
        foreignKey : "id"
    })
    guia.belongsTo(vehiculo,{
        foreignKey : "guia_id"
    })
    vehiculo.belongsTo(guia,{
        foreignKey : "auto"
    })
/*

*/