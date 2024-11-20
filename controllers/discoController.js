const { Disco, Genero } = require('../models');

module.exports = {
  async criar(req, res) {
    try {
      console.log('Dados do Formulário:', req.body);
      console.log('Arquivo Enviado:', req.file);
  
      const { titulo, ano_lancamento, genero_id } = req.body;
      const capa = req.file ? req.file.path : null;
  
      if (!titulo || !ano_lancamento || !genero_id) {
        return res.status(400).send('Todos os campos são obrigatórios!');
      }
  
      const disco = await Disco.create({
        titulo, 
        ano_lancamento, 
        genero_id,
        capa
      });
  
      res.redirect('/disco'); 
    } catch (error) {
      console.error('Erro ao cadastrar disco:', error.message);
      res.status(400).send(`Erro ao cadastrar disco: ${error.message}`);
    }
  },

  async listar(req, res) {
    try {
      const discos = await Disco.findAll({ include: { model: Genero } });
      res.render('discos', { discos });
    } catch (error) {
      res.status(400).send(`Erro ao listar discos: ${error.message}`);
    }
  },

  async mostrarCadastro(req, res) {
    try {
      const generos = await Genero.findAll();
      res.render('cadastrarDisco', { generos });
    } catch (error) {
      res.status(400).send(`Erro ao carregar página de cadastro: ${error.message}`);
    }
  },
};
