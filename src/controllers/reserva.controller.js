import { reserva } from "../models/reserva.models.js"

export const getReservas = async (req, res) => {
  try {
    const listaReservas = await reserva.findAll()
    res.json(listaReservas)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const createReserva = async (req, res) => {
  const { id_servicio, id_turista, nombre } = req.body

  try {
    const newReserva = await reserva.create({
      id_servicio,
      id_turista,
      nombre,
    })

    res.json(newReserva)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};