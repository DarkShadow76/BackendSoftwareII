import { usuario } from "./model.usuario.js";
//import guia from "./guia.model";
import { servicio } from "./model.servicio.js";
import { reserva } from "./model.reserva.js";
import { compra } from "./model.compra.js";

usuario.hasMany(reserva, { foreignKey: 'id_turista' });
reserva.belongsTo(usuario, { foreignKey: 'id_turista' });

servicio.hasMany(reserva, { foreignKey: 'id_servicio' });
reserva.belongsTo(servicio, { foreignKey: 'id_servicio' });

usuario.hasMany(servicio, { foreignKey: 'id_guia' });
servicio.belongsTo(usuario, { foreignKey: 'id_guia' });

compra.belongsTo(usuario,{ foreignKey: 'id_turista' })
usuario.hasMany(compra,{ foreignKey: 'id_turista' })