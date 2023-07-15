//const { repositoryUsuario } = require ('../repository/repository.usuario');
import { usuario } from "../models/usuario.models.js"

export const getUsuarios = async (req, res) => {
  const listaUsuarios = await usuario.findAll()
  res.send(listaUsuarios)
}

export const createUsuario = async (req, res) => {
  const { nombre, apellido, dni, correo, contrasenia, telefono, tipo } = req.body

  const newUsuario = await usuario.create({
    nombre,
    apellido,
    dni,
    correo,
    contrasenia,
    telefono,
    tipo,
  })

  //console.log(newUsuario)
  res.send('create usuarios')
}