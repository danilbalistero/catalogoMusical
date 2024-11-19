'use strict';

module.exports = (sequelize, DataTypes) => {
  const Faixa = sequelize.define('Faixa', {
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
    numero: {  
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'faixas',
    underscored: true,
  });

  Faixa.associate = function(models) {
    Faixa.belongsTo(models.Disco, { foreignKey: 'disco_id' }); 
  };

  return Faixa;
};