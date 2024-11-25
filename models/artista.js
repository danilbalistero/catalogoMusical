module.exports = (sequelize, DataTypes) => {
  const Artista = sequelize.define('Artista', {
    nome: DataTypes.STRING
  }, {
    tableName: 'artistas',  
    underscored: true,
  });

  Artista.associate = function(models) {
    Artista.belongsTo(models.Genero, { foreignKey: 'genero_id' });
  };

  return Artista;
};
