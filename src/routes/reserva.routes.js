//const { Router} = require('express');
import { Router } from 'express';
import { getReservas, createReserva } from '../controllers/reserva.controller.js';

const router = Router();

router.get("/reservas", getReservas);
router.post("/reserva", createReserva);
router.put("/reserva/:id");
router.get("/reserva/:id");
router.get("/reserva/:id");

export default router;