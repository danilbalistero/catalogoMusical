const express = require('express');
const router = express.Router();

const generoController = require('../controllers/generoController');
const artistaController = require('../controllers/artistaController');
const discoController = require('../controllers/discoController');

router.get('/', (req, res) => {
  res.render('index', { title: 'Catálogo Musical' });
});

router.post('/genero', generoController.criar);
router.get('/genero', generoController.listar);
router.get('/genero/:id', generoController.mostrar);

router.post('/artista', artistaController.criar);
router.get('/artista', artistaController.listar);

router.post('/disco', discoController.criar);
router.get('/disco', discoController.listar);
router.get('/disco/novo', discoController.mostrarCadastro);

module.exports = router;
