const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>


const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
    "postgres://postgres:postgres@localhost:5433/postgres"
    const sequelize = new Sequelize(CADENA_CONEXION)
    /*const sequelize = new Sequelize(CADENA_CONEXION,{
        dialectOptions : {
            ssl : {
                require : true,
                rejectUnauthorized : false
            }
        }
    })*/

    const usuario = sequelize.define("usuario", {
        id : {
            primaryKey : true,
            type : DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4
        },
        nombre : {
            type : DataTypes.STRING(200),
            allowNull : false
        },
        apellido: {
            type : DataTypes.STRING(200),
            allowNull : true
        },  
        correo:{
            type : DataTypes.STRING(200),
            allowNull : false
        },
        contrasena:{
            type: DataTypes.STRING(200),
            allowNull : false
        },
        direccion: {
            type : DataTypes.STRING(200),
            allowNull : true
        },
        departamento: {
            type : DataTypes.STRING(200),
            allowNull : true
        },
        ciudad: {
            type :  DataTypes.STRING(200),
            allowNull : true
        },
        cod_post: {
            type : DataTypes.STRING(200),
            allowNull : true
        },
        telefono: {
            type : DataTypes.INTEGER,
            allowNull : false
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
            type : DataTypes.STRING(200),
            allowNull : false
        },
        apellido: {
            type : DataTypes.STRING(200),
            allowNull : true
        },  
        correo:{
            type : DataTypes.STRING(200),
            allowNull : false
        },
        contrasena:{
            type: DataTypes.STRING(200),
            allowNull : false
        },
        direccion: {
            type : DataTypes.STRING(200),
            allowNull : true
        },
        departamento: {
            type : DataTypes.STRING(200),
            allowNull : true
        },
        ciudad: {
            type :  DataTypes.STRING(200),
            allowNull : true
        },
        cod_post: {
            type : DataTypes.STRING(200),
            allowNull : true
        },
        telefono: {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        auto: {
            type : DataTypes.UUIDV4,
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
        monto:{
            type : DataTypes.INTEGER,
            allowNull : false
        },
        direccion: {
            type : DataTypes.STRING(200),
            allowNull : false
        },
        fecha: {
            type : DataTypes.DATE,
            allowNull : false
        },
        usuario_id: {
            type: DataTypes.UUID,
            defaultValue : Sequelize.UUIDV4,
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
        color: {
            type : DataTypes.STRING(200),
            allowNull : false
        },
        placa: {
            type : DataTypes.STRING(200),
            allowNull : false
        },
        tipo: {
            type : DataTypes.STRING(200),
            allowNull : false
        },
        año: {
            type : DataTypes.INTEGER,
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

    // Relaciones
    //reporte *-------->1 usuario
    usuario.belongsto(tour,{
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