const { Disco, Genero } = require('../models');

module.exports = {
  async criar(req, res) {
    try {
      const disco = await Disco.create(req.body);
      return res.status(201).json(disco);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const discos = await Disco.findAll({
        include: { model: Genero }, 
      });
      res.render('discos', { discos });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async mostrarCadastro(req, res) {
    try {
      const generos = await Genero.findAll();
      res.render('cadastrarDisco', { generos });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
