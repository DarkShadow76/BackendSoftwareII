import { where } from "sequelize";
import { usuario } from "../models/usuario.models.js"

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const Usuario = await usuario.findOne({
      where: {
        id,
      }
    })

    if (!Usuario) return res.status(404).json({message: 'Usuario no existe'})
    res.json(Usuario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const getUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await usuario.findAll();
    res.json(listaUsuarios);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const getUsuariosByType = async (req, res) => {
  try {
    const { tipo } = req.params
    const Usuarios = await usuario.findAll({
      where: {
        tipo,
      }
    })

    res.json(Usuarios)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const createUsuario = async (req, res) => {
  const { nombre, apellido, dni, correo, contrasenia, telefono, tipo } = req.body

  try {
    const newUsuario = await usuario.create({
      nombre,
      apellido,
      dni,
      correo,
      contrasenia,
      telefono,
      tipo,
    })

    res.json(newUsuario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellido,
      correo,
      contrasenia,
      telefono,
      id_reserva,
      id_servicio,
    } = req.body

    const Usuario = await usuario.findByPk(id)
    Usuario.nombre = nombre
    Usuario.apellido = apellido
    Usuario.correo = correo
    Usuario.contrasenia = contrasenia
    Usuario.telefono = telefono
    Usuario.id_reserva = id_reserva
    Usuario.id_servicio = id_servicio

    await Usuario.save()

    res.json(Usuario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await usuario.destroy({
      where: {
        id,
      }
    });

    res.sendStatus(204)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};