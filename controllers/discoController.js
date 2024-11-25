const { Disco, Genero } = require('../models');  
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

exports.listarDiscos = async (req, res) => {
    try {
        const discos = await Disco.findAll({ include: Genero }); 
        res.render('discos/lista', { discos });  
    } catch (error) {
        console.error('Erro ao listar discos:', error);
        res.status(500).send('Erro ao listar discos');
    }
};

exports.exibirFormulario = async (req, res) => {
    try {
        const generos = await Genero.findAll();  
        res.render('discos/cadastro', { 
            title: 'Cadastrar Disco',
            generos: generos 
        });
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
        res.status(500).send('Erro ao buscar gêneros');
    }
};

exports.criarDisco = (req, res) => {
  const { titulo, ano_lancamento, genero_id } = req.body;
  const capa = req.file ? req.file.filename : null; 

  Disco.create({
    titulo,
    ano_lancamento,
    genero_id,
    capa
  })
    .then(() => {
      res.redirect('/disco'); 
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Erro ao cadastrar disco');
    });
};

exports.editarDisco = async (req, res) => {
  try {
    const disco = await Disco.findByPk(req.params.id);
    res.render('discos/cadastro', { disco });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.atualizarDisco = async (req, res) => {
  try {
    const disco = await Disco.findByPk(req.params.id);
    await disco.update(req.body);
    res.redirect('/discos');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletarDisco = async (req, res) => {
  try {
    const disco = await Disco.findByPk(req.params.id);
    await disco.destroy();
    res.redirect('/discos');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
