const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

//const data = require("./test_data") // importamos data de test
const { usuario, producto , orden , orden_producto, pc_armado, pc_armado_producto, reporte, resena} = require("./dao")

/*const PUERTO = process.env.PORT || 4445*/
const PUERTO = 4447

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico


app.post("/turista", async (req,resp) => {
    const dataRequest = req.body
    const nombre = dataRequest.nombre
    const apellido = dataRequest.apellido
    const correo = dataRequest.correo
    const telefono = dataRequest.telefono
    const contrasena = dataRequest.contrasena
    const id_tour = dataRequest.id_tour

    await turista.create({
        nombre : nombre,
        apellido : apellido,
        correo : correo,
        telefono : telefono,
        contrasena : contrasena,
        id_tour : id_tour,
    })

    resp.send({
        confirmar: "Registro exitoso"
    })
})

app.post("/guia", async (req,resp) => {
    const dataRequest = req.body
    const nombre = dataRequest.nombre
    const apellido = dataRequest.apellido
    const correo = dataRequest.correo
    const telefono = dataRequest.telefono
    const contrasena = dataRequest.contrasena
    const id_tour = dataRequest.id_tour
    const id_vehiculo = dataRequest.id_vehiculo
    const calificacion = dataRequest.calificacion

    await turista.create({
        nombre : nombre,
        apellido : apellido,
        correo : correo,
        telefono : telefono,
        contrasena : contrasena,
        id_tour : id_tour,
        id_vehiculo : id_vehiculo,
        calificacion : calificacion,
    })

    resp.send({
        confirmar: "Registro exitoso"
    })
})

app.post("/tour", async (req,resp) => {
    const dataRequest = req.body
    const id_guia = dataRequest.id_guia
    const id_turista = dataRequest.id_turista
    const id_zona = dataRequest.id_zona
    const fecha = dataRequest.fecha

    await reporte.create({
        dataRequest : req.body,
        id_guia : dataRequest.id_guia,
        id_turista : dataRequest.id_turista,
        id_zona : dataRequest.id_zona,
        fecha : dataRequest.fecha,
    })  
    resp.send({
        confirmar: "Informacion del tour enviada correctamente"
    })
})

app.post("/vehiculo", async (req,resp) => {
    const dataRequest = req.body
    const id_guia = dataRequest.id_guia
    const placa = dataRequest.placa
    const modelo = dataRequest.modelo
    const tipo = dataRequest.tipo
    const n_asientos = dataRequest.n_asientos
    await reporte.create({
        id_guia : id_guia,
        placa : placa,
        modelo : modelo,
        tipo : tipo,
        n_asientos : n_asientos,
    })  
    resp.send({
        confirmar: "Informacion del vehiculo enviada correctamente"
    })
})

app.post("/zona", async (req,resp) => {
    const dataRequest = req.body
    const nombre = req.nombre
    const id_tour = dataRequest.id_tour
    await reporte.create({
        nombre : nombre,
        id_tour : id_tour,
    })  
    resp.send({
        confirmar: "Informacion de mi cabeZOna enviada correctamente"
    })
})

app.get("/turista", async (req, resp) => {
    const listaTurista = await turista.findAll()
    resp.send(listaTurista)
})

app.get("/guia", async (req, resp) => {
    const listaGuia = await guia.findAll()
    resp.send(listaGuia)
})

app.get("/vehiculo", async (req, resp) => {
    const listaVehiculo = await vehiculo.findAll()
    resp.send(listaVehiculo)
})

app.get("/tour", async (req, resp) => {
    const listaTour = await tour.findAll()
    resp.send(listaTour)
})

app.get("/zona", async (req, resp) => {
    const listaZona = await zona.findAll()
    resp.send(listaZona)
})

app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})