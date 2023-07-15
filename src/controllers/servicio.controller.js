//const { repositoryUsuario } = require ('../repository/repository.usuario');
import { servicio } from "../models/servicio.models.js"

export const getServicios = async (req, res) => {
  const listaServicios = await servicio.findAll()
  res.send(listaServicios)
}

export const createServicio = async (req, res) => {
  const { id_guia, monto, categoria, puntaje, estado } = req.body

  const newServicio = await servicio.create({
    id_guia,
    monto,
    categoria,
    puntaje,
    estado,
  })

  //console.log(newServicio)
  res.send('create servicio')
}