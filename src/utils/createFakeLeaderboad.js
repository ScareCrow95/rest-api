const Leaderboard = require('../models/Leaderboard')

module.exports = async () => {
  const playerNames = [
    'Jayden',
    'Josh Jones',
    'Zak',
    'Liam Fraser',
    'Zak',
    'Cooper',
    'Roman Carr',
    'Dalton',
    'Archer',
    'Alec Stout',
    'Will',
    'Ava',
    'Isabelle',
    'Luna'
  ]

  const fish_ids = [
    'salmon',
    'tuna',
    'catfish',
    'zander',
    'nothern_pike',
    'guppy',
    'mahi_mahi',
    'tench',
    'sunfish',
    'pollock',
    'haddock'
  ]

  const totalValues = 1000

  for (let index = 0; index < totalValues; index++) {
    const result = await Leaderboard.create({
      fish_id: fish_ids[randomIntFromInterval(0, fish_ids.length - 1)],
      fish_length: Math.random() * 4,
      fish_width: Math.random() * 2,
      username: playerNames[randomIntFromInterval(0, playerNames.length - 1)]
    }).catch(e => {
      console.log(e)
    })
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
