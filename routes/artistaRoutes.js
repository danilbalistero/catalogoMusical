const express = require('express');
const artistaController = require('../controllers/artistaController');

const router = express.Router();

router.post('/artistas', artistaController.cadastrarArtista);
router.get('/artistas', artistaController.listarArtistas);

module.exports = router;
