const LeaderboardWeekly = require('../models/LeaderboardWeekly')

const { Op } = require('sequelize')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }
  // data.fish_id
  const result = await LeaderboardWeekly.destroy({
    where: {
      createdAt: {
        [Op.lte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
      }
    }
  })

  console.log('deleted old records: ' + result)
}
