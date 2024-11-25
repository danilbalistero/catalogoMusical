const express = require('express');
const router = express.Router();
const artistaController = require('../controllers/artistaController');

router.get('/', artistaController.listar);
router.get('/novo', artistaController.cadastrar);
router.post('/novo', artistaController.salvar);

module.exports = router;