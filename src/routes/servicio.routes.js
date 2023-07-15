//const { Router} = require('express');
import { Router } from 'express';
import { getServicios, createServicio } from '../controllers/servicio.controller.js';

const router = Router();

router.get("/servicios", getServicios);
router.post("/servicio", createServicio);
router.put("/servicio/:id");
router.get("/servicio/:id");
router.get("/servicio/:id");

export default router;