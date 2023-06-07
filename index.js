const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

//const data = require("./test_data") // importamos data de test
const { turista, guia, servicio, reserva} = require("./dao")

/*const PUERTO = process.env.PORT || 4445*/
const PUERTO = 4447

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico


app.post("/turista", async (req, resp) => {
  const dataRequest = req.body
  const nombre = dataRequest.nombre
  const apellido = dataRequest.apellido
  const correo = dataRequest.correo
  const telefono = dataRequest.telefono
  const contrasena = dataRequest.contrasena
  const id_tour = dataRequest.id_tour

  await turista.create({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    contrasena: contrasena,
    id_tour: id_tour,
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
  const contrasena = dataRequest.contrasena
  const id_tour = dataRequest.id_tour
  const id_vehiculo = dataRequest.id_vehiculo
  const calificacion = dataRequest.calificacion

  await guia.create({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    contrasena: contrasena,
    id_tour: id_tour,
    id_vehiculo: id_vehiculo,
    calificacion: calificacion,
  })

  resp.send({
    confirmar: "Registro exitoso"
  })
})

app.post("/servicio", async (req, resp) => {
  const dataRequest = req.body
  const id_guia = dataRequest.id_guia
  const id_turista = dataRequest.id_turista
  const fecha = dataRequest.fecha

  await tour.create({
    dataRequest: req.body,
    id_guia: dataRequest.id_guia,
    id_turista: dataRequest.id_turista,
    id_zona: dataRequest.id_zona,
    fecha: dataRequest.fecha,
  })
  resp.send({
    confirmar: "Informacion del tour enviada correctamente"
  })
})

app.get("/turista", async (req, resp) => {
  const id = req.query.id
  if (id == undefined || id == "-1") {
    const listaTuristas = await turista.findAll()
    resp.send(listaTuristas)
  }
  else {
    const turistasFiltrados = await turista.findAll({
      where: { id: id }
    })
    resp.send(turistasFiltrados)
  }
})

app.get("/guia", async (req, resp) => {
  const id = req.query.id
  if (id == undefined || id == "-1") {
    const listaGuias = await guia.findAll()
    resp.send(listaGuias)
  }
  else {
    const guiasFiltrados = await guia.findAll({
      where: { id: id }
    })
    resp.send(guiasFiltrados)
  }
})

app.get("/servicio", async (req, resp) => {
  const listaServ = await servicio.findAll()
  resp.send(listaServ)
})

app.get("/reserva", async (req, resp) => {
  const listaReserv = await reserva.findAll()
  resp.send(listaReserv)
})

app.listen(PUERTO, () => {
  console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})