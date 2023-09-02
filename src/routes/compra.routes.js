//const { Router} = require('express');
import { Router } from 'express';
import { getCompras, createCompra } from '../controllers/compra.controller.js';

const router = Router();

router.get("/compras", getCompras);
router.post("/compra", createCompra);
router.put("/compra/:id");
router.get("/compra/:id");
router.get("/compra/:id");

export default router;