const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');


router.get('/', generoController.listarGeneros);
router.get('/novo', generoController.exibirFormulario);
router.post('/novo', generoController.criarGenero);
router.get('/editar/:id', generoController.editarGenero);
router.post('/editar/:id', generoController.atualizarGenero);
router.post('/deletar/:id', generoController.deletarGenero);

module.exports = router;
