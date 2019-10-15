const Player = require('../models/CloudSavePlayer')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }
  console.log(data)

  const player = await Player.findAll({
    where: {
      player_id: data.fb_player_id
    },
    attributes: ['saved_content', 'saved_id']
  }).catch(errHandler)

  let payload = {}
  if (player)
    payload = {
      content: player[0].dataValues.saved_content,
      id: player[0].dataValues.saved_id
    }

  return payload
}
