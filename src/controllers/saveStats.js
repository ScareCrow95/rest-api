const Leaderboard = require('../models/Leaderboard')

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

  const result = await Leaderboard.create({
    fish_id: data.fish_id,
    fish_length: data.fish_length,
    fish_width: data.fish_width,
    username: data.username
  })

  return 200
}
