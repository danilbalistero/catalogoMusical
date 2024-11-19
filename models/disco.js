'use strict';

module.exports = (sequelize, DataTypes) => {
  const Disco = sequelize.define('Disco', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anoLancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    generoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'generos',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    tableName: 'discos',
    underscored: true,
  });

  Disco.associate = function(models) {
    // Definindo o relacionamento com a tabela 'generos'
    Disco.belongsTo(models.Genero, { foreignKey: 'generoId' });
  };

  return Disco;
};
