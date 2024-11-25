const { Genero } = require('../models');

module.exports = {
  listarGeneros: async (req, res) => {
    try {
      const generos = await Genero.findAll();
      res.render('generos/lista', {
        title: 'Lista de Gêneros Musicais',
        generos
      });
    } catch (error) {
      res.status(500).send('Erro ao listar gêneros');
    }
  },

  exibirFormulario: (req, res) => {
    res.render('generos/cadastro', { title: 'Cadastrar Novo Gênero' });
  },

  criarGenero: async (req, res) => {
    try {
      const { nome } = req.body;
      await Genero.create({ nome });
      res.redirect('/generos');
    } catch (error) {
      res.status(500).send('Erro ao criar gênero');
    }
  },

  editarGenero: async (req, res) => {
    try {
      const { id } = req.params;
      const genero = await Genero.findByPk(id);
      if (!genero) {
        return res.status(404).send('Gênero não encontrado');
      }
      res.render('generos/editar', { genero });
    } catch (error) {
      res.status(500).send('Erro ao editar gênero');
    }
  },

  atualizarGenero: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const genero = await Genero.findByPk(id);
      if (!genero) {
        return res.status(404).send('Gênero não encontrado');
      }
      await genero.update({ nome });
      res.redirect('/generos');
    } catch (error) {
      res.status(500).send('Erro ao atualizar gênero');
    }
  },

  deletarGenero: async (req, res) => {
    try {
      const { id } = req.params;
      const genero = await Genero.findByPk(id);
      if (!genero) {
        return res.status(404).send('Gênero não encontrado');
      }
      await genero.destroy();
      res.redirect('/generos');
    } catch (error) {
      res.status(500).send('Erro ao deletar gênero');
    }
  },
};