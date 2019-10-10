const Sequelize = require('sequelize')
const config = require('../../config/config')

const database = config.production

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: database.dialect
  }
)

module.exports = sequelize
global.sequelize = sequelize
