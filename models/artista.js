'use strict';

module.exports = (sequelize, DataTypes) => {
  const Artista = sequelize.define('Artista', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero_id: {  
      type: DataTypes.INTEGER,
      references: {
        model: 'generos',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    tableName: 'artistas',
    underscored: true,
  });

  Artista.associate = function(models) {
    Artista.belongsTo(models.Genero, { foreignKey: 'genero_id' });
  };

  return Artista;
};