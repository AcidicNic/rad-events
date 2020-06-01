'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Events', 'date', { type: Sequelize.DATE });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Events', 'date');
  }
};
