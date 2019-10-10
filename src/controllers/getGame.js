const Player = require('../models/Player')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }

  const player = await Player.findAll({
    where: {
      player_id: data.player_id
    },
    attributes: ['saved_content']
  }).catch(errHandler)

  return player[0].dataValues.saved_content
}
