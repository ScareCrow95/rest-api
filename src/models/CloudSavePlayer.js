const Sequelize = require('sequelize')

module.exports = sequelize.define('cloud_save_player', {
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
  }
})
