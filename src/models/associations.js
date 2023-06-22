import usuario from "./model.usuario";
//import guia from "./guia.model";
import servicio from "./model.servicio";
import reserva from "./model.reserva";


usuario.hasMany(reserva, { foreignKey: 'id_usuario' });
reserva.belongsTo(usuario, { foreignKey: 'id_usuario' });

servicio.hasMany(reserva, { foreignKey: 'id_servicio' });
reserva.belongsTo(servicio, { foreignKey: 'id_servicio' });

usuario.hasMany(servicio, { foreignKey: 'id_usuario' });
servicio.belongsTo(usuario, { foreignKey: 'id_usuario' });