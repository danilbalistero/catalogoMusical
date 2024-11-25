module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('Genero', {
    nome: DataTypes.STRING
  }, {
    tableName: 'generos',  
    underscored: true,     
  });

  return Genero;
};
