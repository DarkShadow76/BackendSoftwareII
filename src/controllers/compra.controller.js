import { compra } from "../models/compra.models.js"

export const getCompras = async (req, res) => {
  try {
    const listaCompras = await compra.findAll()
    res.json(listaCompras)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const createCompra = async (req, res) => {
  const { id_servicio, id_turista, total } = req.body

  try {
    const newCompra = await compra.create({
      id_servicio,
      id_turista,
      total,
    })

    res.json(newCompra)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}