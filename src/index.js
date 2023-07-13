import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/associations.js";
import "./models/model.usuario.js";
//const data = require("./test_data") // importamos data de test
//const { turista, guia, servicio, reserva } = require("./dao")
//const { invUser } = require("./util").default

/*const PUERTO = process.env.PORT || 4445*/
const PUERTO = 4447

// Middlewares

/**
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors()); // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")); // <-- configuracion de contenido estatico


// Routes
app.use(require('./routes/index'));
**/
/**
async function getUser(userType, id, correo, contrasenia, resp) {
  if (id == undefined || id == "-1") {
    if ((correo == undefined || correo == "-1") &&
      (contrasenia == undefined || contrasenia == "-1")) {

      const listaUsuario = await userType.findAll()
      resp.send(listaUsuario)

    } else {

      const number = await userType.count({
        where: {
          correo: correo,
          contrasenia: contrasenia
        }
      })
      if (number < 1) {
        //var prob = JSON.parse("-1")
        console.log("No existe tal usuario el tabla")
        resp.send(invUser)
      } else {
        const usuarioFiltrado = await userType.findAll({
          where: {
            correo: correo,
            contrasenia: contrasenia
          }
        })

        console.log("Usuario " + number)
        resp.send(usuarioFiltrado)
      }
    }
  }
  else {
    const usuarioFiltrados = await userType.findAll({
      where: { id: id }
    })
    resp.send(usuarioFiltrados)
  }

  // return console.log("Happy Easter")
}

app.post("/turista", async (req, resp) => {
  const dataRequest = req.body
  const nombre = dataRequest.nombre
  const apellido = dataRequest.apellido
  const correo = dataRequest.correo
  const telefono = dataRequest.telefono
  const contrasenia = dataRequest.contrasenia

  await turista.create({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    contrasenia: contrasenia
  })

  resp.send({
    confirmar: "Registro exitoso"
  })
})

app.post("/guia", async (req, resp) => {
  const dataRequest = req.body
  const nombre = dataRequest.nombre
  const apellido = dataRequest.apellido
  const correo = dataRequest.correo
  const telefono = dataRequest.telefono
  const contrasenia = dataRequest.contrasenia

  await guia.create({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    contrasenia: contrasenia
  })

  resp.send({
    confirmar: "Registro exitoso"
  })
})

app.post("/servicio", async (req, resp) => {
  const dataRequest = req.body
  const id_guia = dataRequest.id_guia
  const monto = dataRequest.monto
  const categoria = dataRequest.categoria
  const puntaje = dataRequest.puntaje
  const estado = dataRequest.estado

  await servicio.create({
    id_guia: id_guia,
    monto: monto,
    categoria: categoria,
    puntaje: puntaje,
    estado: estado
  })
  resp.send({
    confirmar: "Informacion del servicio enviada correctamente"
  })
})

app.post("/reserva", async (req, resp) => {
  const dataRequest = req.body
  const turista_id = dataRequest.turista_id
  const servicio_id = dataRequest.servicio_id
  const nombre = dataRequest.nombre

  await reserva.create({
    turista_id: turista_id,
    servicio_id: servicio_id,
    nombre: nombre
  })
  resp.send({
    confirmar: "Informacion de reserva enviada correctamente"
  })
})

app.get("/turista", async (req, resp) => {
  const id = req.query.id
  const correo = req.query.correo
  const contrasenia = req.query.contrasenia
  getUser(turista, id, correo, contrasenia, resp)
})

app.get("/guia", async (req, resp) => {
  const id = req.query.id
  const correo = req.query.correo
  const contrasenia = req.query.contrasenia
  getUser(guia, id, correo, contrasenia, resp)
})

app.get("/servicio", async (req, resp) => {
  const listaServ = await servicio.findAll()
  resp.send(listaServ)
})

app.get("/reserva", async (req, resp) => {
  const listaReserv = await reserva.findAll()
  resp.send(listaReserv)
})
**/

async function main() {
  try {
    await sequelize.sync()
    app.listen(PUERTO, () => {
      console.log(`Servidor web iniciado en puerto ${PUERTO}`)
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();