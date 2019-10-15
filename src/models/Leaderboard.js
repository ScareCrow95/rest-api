const Sequelize = require('sequelize')

module.exports = sequelize.define('leaderboard', {
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
  }
})
