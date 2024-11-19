const express = require('express');
const artistaController = require('../controllers/artistaController');

const router = express.Router();

// Rota para cadastrar artista
router.post('/artistas', artistaController.cadastrarArtista);

// Rota para listar artistas
router.get('/artistas', artistaController.listarArtistas);

module.exports = router;
