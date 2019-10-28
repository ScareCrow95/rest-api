const Leaderboard = require('../models/Leaderboard')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }
  // data.fish_id
  const result = await Leaderboard.findAll({
    raw: true,
    limit: 50,
    where: {
      fish_id: data.fish_id
    },
    order: [['fish_length', 'DESC']],
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
  return result
}
