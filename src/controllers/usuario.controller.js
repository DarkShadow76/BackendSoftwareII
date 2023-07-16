import { usuario } from "../models/usuario.models.js"

export const getUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await usuario.findAll();
    res.json(listaUsuarios);
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
}