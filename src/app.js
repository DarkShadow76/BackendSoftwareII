import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js';
import servicioRoutes from './routes/servicio.routes.js';
import compraRoutes from './routes/compra.routes.js';
import reservaRoutes from './routes/servicio.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(usuarioRoutes);
app.use(servicioRoutes);
app.use(compraRoutes);
app.use(reservaRoutes);

export default app;