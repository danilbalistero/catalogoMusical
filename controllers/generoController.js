const { Genero } = require('../models');

module.exports = {
  async criar(req, res) {
    try {
      const genero = await Genero.create(req.body);
      return res.status(201).json(genero);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const generos = await Genero.findAll();
      return res.status(200).json(generos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async mostrar(req, res) {
    try {
      const genero = await Genero.findByPk(req.params.id);
      if (!genero) {
        return res.status(404).json({ message: 'Gênero não encontrado' });
      }
      return res.status(200).json(genero);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
