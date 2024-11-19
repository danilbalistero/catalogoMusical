'use strict';

module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('Genero', {
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
  }, {
    tableName: 'generos',
    underscored: true,
  });

  Genero.associate = function(models) {
    // Definindo o relacionamento com a tabela 'discos'
    Genero.hasMany(models.Disco, { foreignKey: 'generoId' });
    // Definindo o relacionamento com a tabela 'artistas'
    Genero.hasMany(models.Artista, { foreignKey: 'generoId' });
  };

  return Genero;
};
