import { servicio } from "../models/servicio.models.js"

export const getServicios = async (req, res) => {
  try {
    const listaServicios = await servicio.findAll()
    res.json(listaServicios)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createServicio = async (req, res) => {
  const { id_guia, monto, categoria, puntaje, estado } = req.body

  try {
    const newServicio = await servicio.create({
      id_guia,
      monto,
      categoria,
      puntaje,
      estado,
    })

    res.json(newServicio)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}