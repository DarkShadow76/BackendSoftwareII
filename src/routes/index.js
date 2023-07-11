const { Router} = require('express');
const router = Router();

const { create, findAll, findOne, update, remove} = require('../controllers/usuario.controller')

router.get('/usuario', findAll);
router.get('/usuario/:id', findOne);

module.exports = router;