const express = require('express');
const multer = require('multer');
const discoController = require('../controllers/discoController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/disco', upload.single('capa'), discoController.criar);
router.get('/disco/novo', discoController.mostrarCadastro);

module.exports = router;