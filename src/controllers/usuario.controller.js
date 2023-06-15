import usuario, { usuario } from "../models/usuario.model.js";

export const getUserById = async (req, reso) => {
  try {
    const { id_usuario } = req.params;
    const usuario = await usuario.findByPk(id_usuario);



  } catch (error) {

  }
}