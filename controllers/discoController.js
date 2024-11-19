const { Disco } = require('../models');

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
      const discos = await Disco.findAll();
      return res.status(200).json(discos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
