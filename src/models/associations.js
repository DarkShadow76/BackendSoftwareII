import usuario from "./usuario.model";
//import guia from "./guia.model";
import servicio from "./servicio.model";
import reserva from "./reserva.model";


usuario.hasMany(reserva, { foreignKey: 'id_usuario' });
reserva.belongsTo(usuario, { foreignKey: 'id_usuario' });

servicio.hasMany(reserva, { foreignKey: 'id_servicio' });
reserva.belongsTo(servicio, { foreignKey: 'id_servicio' });

usuario.hasMany(servicio, { foreignKey: 'id_usuario' });
servicio.belongsTo(usuario, { foreignKey: 'id_usuario' });