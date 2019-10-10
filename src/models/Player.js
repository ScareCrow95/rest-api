const Sequelize = require('sequelize')

module.exports = sequelize.define('player', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  saved_content: Sequelize.TEXT('long'),

  player_id: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  }
})
