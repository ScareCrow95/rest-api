'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      saved_content: Sequelize.TEXT('long'),

      player_id: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players')
  }
}
