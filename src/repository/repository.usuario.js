const{ usuario } = require('@models/usuario.models')
const{ Pool } = require('pg')

const create = async (usuario) => {
  console.log("create usuario")
  try {
    console.log(usuario)

    const { nombre, apellido, dni, contrasenia, telefono } = usuario;

    const newUsuario = await usuario.create(usuario);

    return newUsuario;
  } catch (error) {
    console.error(error)

    return null;
  }
}

const findAll = async () => {
  try {
    return await usuario.findAll();
  } catch (error) {
    console.error(error)

    return null;
  }
}

const findOne = async (id_usuario) => {
  try {
    return await usuario.findOne({
      where: {
        id: id_usuario
      }
    })
  } catch (error) {
    console.error(error)

    return null;
  }
}

const update = async (usuario) => {
  try {
    const foundUsuario = await usuario.findOne({
      where: {
        id: usuario.id
      }
    })
    foundUsuario.set(usuario);
    await foundUsuario.save();

    return foundUsuario;
  } catch (error) {
    console.error(error)

    return null;
  }
}

const remove = async (id_usuario) => {
  try {
    await usuario.destroy({
      where: {
        id_usuario
      }
    })

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}

const repositoryUsuario = { create, findAll, findOne, update, remove}

module.exports = repositoryUsuario;