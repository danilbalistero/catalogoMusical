module.exports = (sequelize, DataTypes) => {
  const Faixa = sequelize.define('Faixa', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
  });

  Faixa.associate = function(models) {
    Faixa.belongsTo(models.Disco, {
      foreignKey: 'disco_id',
      as: 'disco', 
    });
  };

  return Faixa;
};
