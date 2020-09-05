'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Todos', 'isDone', {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Todos', 'isDone', {
      allowNull: false,
      type: Sequelize.BOOLEAN
    })
  }
};