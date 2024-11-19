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
    ano_lancamento: { // Use o snake_case aqui
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genero_id: { // Use o snake_case aqui
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
    Disco.belongsTo(models.Genero, { foreignKey: 'genero_id' });
  };

  return Disco;
};
