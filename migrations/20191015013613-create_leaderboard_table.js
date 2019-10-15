'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leaderboards', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      fish_id: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      fish_length: {
        type: Sequelize.FLOAT(3),
        allowNull: false
      },

      fish_width: {
        type: Sequelize.FLOAT(3),
        allowNull: false
      },

      username: {
        type: Sequelize.STRING(35),
        allowNull: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('leaderboards')
  }
}
