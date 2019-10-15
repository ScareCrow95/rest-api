const Sequelize = require('sequelize')

module.exports = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  username: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  }
})
