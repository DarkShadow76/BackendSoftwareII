//const { repositoryUsuario } = require ('../repository/repository.usuario');
import { reserva } from "../models/reserva.models.js"

export const getReservas = async (req, res) => {
  const listaReserva = await reserva.findAll()
  res.send(listaReserva)
}

export const createReserva = async (req, res) => {
  const { id_servicio, id_turista, nombre } = req.body

  const newReserva= await reserva.create({
    id_servicio,
    id_turista,
    nombre,
  })

  //console.log(newReserva)
  res.send('create reserva')
}