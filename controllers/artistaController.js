const { Artista } = require('../models');

module.exports = {
  async criar(req, res) {
    try {
      const artista = await Artista.create(req.body);
      return res.status(201).json(artista);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const artistas = await Artista.findAll();
      return res.status(200).json(artistas);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
