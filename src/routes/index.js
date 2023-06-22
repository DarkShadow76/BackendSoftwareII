const { Router} = require('express');
const router = Router();

const { create, findAll, findOne, update, remove} = require('../controllers/usuario.controller')

router.get('/tusista', findAll);

module.exports = router;