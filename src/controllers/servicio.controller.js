import { servicio } from "../models/servicio.models.js"

export const getServicio = async (req, res) => {
  try {
    const { id } = req.params
    const Servicio = await servicio.findOne({
      where: {
        id,
      }
    })

    if (!Servicio) return res.status(404).json({ message: 'Servicio no existe' })
    res.json(Servicio)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const getServicios = async (req, res) => {
  try {
    const listaServicios = await servicio.findAll();
    res.json(listaServicios);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const updateServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_guia,
      monto,
      categoria,
      puntaje,
      estado,
    } = req.body

    const Servicio = await servicio.findByPk(id)
    Servicio.nombre = nombre
    Servicio.apellido = apellido
    Servicio.correo = correo
    Servicio.contrasenia = contrasenia
    Servicio.telefono = telefono
    Servicio.id_reserva = id_reserva
    Servicio.id_servicio = id_servicio

    await Usuario.save()

    res.json(Servicio)

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
};

export const deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;
    await servicio.destroy({
      where: {
        id,
      }
    });

    res.sendStatus(204)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};