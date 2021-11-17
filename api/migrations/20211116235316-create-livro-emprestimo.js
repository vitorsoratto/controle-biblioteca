'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('livro_emprestimos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emprestimo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'emprestimo',
          key: 'id'
        }
      },
      livro: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'livro',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('livro_emprestimos');
  }
};