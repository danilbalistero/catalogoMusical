const express = require('express');
const router = express.Router();
const faixaController = require('../controllers/faixaController');

router.get('/', faixaController.listar);
router.get('/nova', faixaController.cadastrar);
router.post('/nova', faixaController.salvar);

module.exports = router;