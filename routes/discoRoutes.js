const express = require('express');
const router = express.Router();
const discoController = require('../controllers/discoController');
const upload = require('../middlewares/upload'); // Importa o middleware

// Rota para cadastrar o disco com upload de imagem
router.post('/', upload.single('capa'), discoController.criarDisco);

router.get('/', discoController.listarDiscos);
router.get('/novo', discoController.exibirFormulario);  
router.post('/novo', discoController.criarDisco);
router.get('/editar/:id', discoController.editarDisco);
router.post('/editar/:id', discoController.atualizarDisco);
router.post('/deletar/:id', discoController.deletarDisco);

module.exports = router;
