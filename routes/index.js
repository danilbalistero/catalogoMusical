const express = require('express');
const router = express.Router();

const generoController = require('../controllers/generoController');
const artistaController = require('../controllers/artistaController');
const discoController = require('../controllers/discoController');

// Página inicial
router.get('/', (req, res) => {
  res.render('index', { title: 'Catálogo Musical' });
});

// Rotas de gênero
router.post('/genero', generoController.criar);
router.get('/genero', generoController.listar);
router.get('/genero/:id', generoController.mostrar);

// Rotas de artista
router.post('/artista', artistaController.criar);
router.get('/artista', artistaController.listar);

// Rotas de disco
router.post('/disco', discoController.criar);
router.get('/disco', discoController.listar);

module.exports = router;
