const { Artista, Genero, Disco } = require('../models');

const artistaController = {
  async listar(req, res) {
    try {
      const artistas = await Artista.findAll({
        include: [{
          model: Genero,  
        }]
      });
      res.render('artistas/lista', { artistas });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao listar artistas.");
    }
  },

  async cadastrar(req, res) {
    try {
      const generos = await Genero.findAll();
      res.render('artistas/cadastro', { generos });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao carregar gêneros.");
    }
  },

  async salvar(req, res) {
    try {
      const { nome, genero_id } = req.body;
      await Artista.create({ nome, genero_id });
      res.redirect('/artistas');
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao cadastrar artista.");
    }
  },
};

module.exports = artistaController;