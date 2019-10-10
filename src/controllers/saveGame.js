const Player = require('../models/Player')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }

  const result = await Player.findOrCreate({
    where: {
      player_id: data.player_id
    },
    defaults: {
      saved_content: data.content
    }
  }).catch(errHandler)

  if (!result[1]) {
    await Player.update(
      { saved_content: data.content },
      {
        where: {
          player_id: data.player_id
        }
      }
    ).catch(errHandler)
    console.log('Saved game for: ' + data.player_id)
    return 200
  } else {
    console.log('Created player: ' + data.player_id)
    return 200
  }
}
