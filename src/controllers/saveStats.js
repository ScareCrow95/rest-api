const Leaderboard = require('../models/Leaderboard')
const LeaderboardWeekly = require('../models/LeaderboardWeekly')

module.exports = async data => {
  /*
        {
            fish_id: string
            fish_length: num
            fish_width: num
            username:string
            id: num
        }
    */
  const errHandler = err => {
    console.error('Error: ', err)
  }

  const stats = {
    fish_id: data.fish_id,
    fish_length: data.fish_length,
    fish_width: data.fish_width,
    username: data.username,
    user_id: data.user_id
  }

  const lowestOnLeaderboard = await leaderboard.findAll({
    limit: 1,
    raw: true,
    order: [['fish_length']],
    attributes: ['id', 'fish_length']
  })

  if (lowestOnLeaderboard) {
    if (lowestOnLeaderboard.fish_length < stats.fish_length) {
      Leaderboard.create({ stats })
      Leaderboard.destroy({
        where: {
          id: lowestOnLeaderboard.id
        }
      })
    }
  } else {
    Leaderboard.create({ stats })
  }

  const result = await LeaderboardWeekly.create({ stats })

  return 200
}
