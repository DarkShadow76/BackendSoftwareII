import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js'

const app = express()

app.use(usuarioRoutes)

export default app;