//const { repositoryUsuario } = require ('../repository/repository.usuario');
import { usuario } from "../models/usuario.models.js"
/**
const create = async (req, res) => {
  const result = await repositoryUsuario.create(req.body);

  return sendResponse(result, res);
}

const findAll = async (req, res) => {
  const usuario = await repositoryUsuario.findAll();
  res.status(200).json(usuario.rows);
  
  return sendResponse(usuario, res);
}

const findOne = async (req, res) => {
  const id = req.params.id;
  const usuario = await repositoryUsuario.findOne(id);

  return sendResponse(usuario, res)
}

const update = async (req, res) => {
  const usuario = await repositoryUsuario.update(req.body);

  return sendResponse(usuario, res);
}

const remove = async (req, res) => {
  const id = req.params.id;

  const usuario = await repositoryUsuario.remove(id);

  return sendResponse(usuario, res);
}

const sendResponse = (result, res) => {

  if (result) return res.status(200).json(result)

  else return res.status(500).json({
    message: 'An error has ocurred.'
  })
}

const controllerUsuario = { create, findAll, findOne, update, remove };

module.exports = controllerUsuario;
**/

export const getUsuarios = (req, res) => {
  res.send('getting usuarios')
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

  console.log(newUsuario)

  res.send('create usuarios')
}