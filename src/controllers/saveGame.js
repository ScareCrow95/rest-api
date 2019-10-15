const Player = require('../models/CloudSavePlayer')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }

  const result = await Player.findOrCreate({
    where: {
      player_id: data.fb_player_id
    },
    defaults: {
      saved_content: data.content,
      saved_id: data.saved_id
    }
  }).catch(errHandler)

  if (!result[1]) {
    await Player.update(
      {
        saved_content: data.content,
        saved_id: data.saved_id
      },
      {
        where: {
          player_id: data.fb_player_id
        }
      }
    ).catch(errHandler)
    console.log('Saved game for: ' + data.fb_player_id)
    return 200
  } else {
    console.log('Created player: ' + data.fb_player_id)
    return 200
  }
}
