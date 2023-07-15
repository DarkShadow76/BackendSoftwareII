//const { repositoryUsuario } = require ('../repository/repository.usuario');
import { compra } from "../models/compra.models.js"

export const getCompras = async (req, res) => {
  const listaCompras = await compra.findAll()
  res.send(listaCompras)
}

export const createCompra = async (req, res) => {
  const { id_servicio, id_turista, total } = req.body

  const newCompra = await compra.create({
    id_servicio,
    id_turista,
    total,
  })

  //console.log(newCompra)
  res.send('create compra')
}