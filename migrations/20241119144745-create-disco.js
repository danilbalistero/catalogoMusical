'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('discos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_lancamento: { 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      genero_id: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'generos',
          key: 'id',
        },
        allowNull: false,
      },
      created_at: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('discos');
  },
};