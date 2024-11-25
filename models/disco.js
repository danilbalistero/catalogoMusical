module.exports = (sequelize, DataTypes) => {
  const Disco = sequelize.define('Disco', {
    titulo: DataTypes.STRING,
    ano_lancamento: DataTypes.INTEGER,
    capa: DataTypes.STRING,
    genero_id: DataTypes.INTEGER
  }, {
    tableName: 'discos',
    underscored: true,
  });

  Disco.associate = function(models) {
    Disco.belongsTo(models.Genero, { foreignKey: 'genero_id' });
  };

  return Disco;
};