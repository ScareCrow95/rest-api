'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cloud_save_players', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      saved_content: Sequelize.TEXT('long'),

      saved_id: Sequelize.STRING(35),

      player_id: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cloud_save_players')
  }
}
