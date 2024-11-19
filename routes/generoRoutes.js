const express = require('express');
const generoController = require('../controllers/generoController');

const router = express.Router();

// Rota para cadastrar gênero
router.post('/generos', generoController.cadastrarGenero);

// Rota para listar gêneros
router.get('/generos', generoController.listarGeneros);

module.exports = router;
