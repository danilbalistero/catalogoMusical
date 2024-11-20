const express = require('express');
const multer = require('multer');
const discoController = require('../controllers/discoController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.post('/discos', upload.single('capa'), discoController.cadastrarDisco);

router.get('/', discoController.listarDiscos);

module.exports = router;
