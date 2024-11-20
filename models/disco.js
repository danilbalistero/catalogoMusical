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
    ano_lancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capa: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: 'discos',
    underscored: true,
  });

  Disco.associate = function(models) {
    Disco.belongsTo(models.Genero, { foreignKey: 'genero_id' });
  };

  return Disco;
};