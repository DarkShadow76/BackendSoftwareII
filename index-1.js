const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

//const data = require("./test_data") // importamos data de test
const { turista, guia, zona, vehiculo, tour } = require("./dao")

/*const PUERTO = process.env.PORT || 4445*/
const PUERTO = 4447

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico

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