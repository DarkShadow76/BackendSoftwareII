//const { Router} = require('express');
import { Router } from 'express';
import {
    getServicios,
    createServicio,
    getServicio,
    updateServicio,
    deleteServicio
} from '../controllers/servicio.controller.js';

const router = Router();

router.get("/servicios", getServicios);
router.get("/servicio/:id", getServicio);
router.post("/servicio", createServicio);
router.put("/servicio/:id", updateServicio);
router.delete("/servicio/:id", deleteServicio);

export default router;