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
    // Relacionamento com a tabela 'generos'
    Artista.belongsTo(models.Genero, { foreignKey: 'genero_id' });
    // Relacionamento com a tabela 'discos'
    Artista.hasMany(models.Disco, { foreignKey: 'artista_id' });
  };

  return Artista;
};
