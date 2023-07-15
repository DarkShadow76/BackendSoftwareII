//const { Router} = require('express');
import { Router } from 'express';
import { getUsuarios, createUsuario } from '../controllers/usuario.controller.js';

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuario", createUsuario);
router.put("/usuario/:id");
router.get("/usuario/:id");
router.get("/usuario/:id");

export default router;