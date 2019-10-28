const Leaderboard = require('../models/Leaderboard')
const LeaderboardWeekly = require('../models/LeaderboardWeekly')

module.exports = async () => {
  const playerNames = [
    { username: 'Jayden', id: 12356 },
    { username: 'Josh Jones', id: 12332456 },
    { username: 'Zak', id: 12388856 },
    { username: 'Liam Fraser', id: 12644356 },
    { username: 'Zak', id: 1266500356 },
    { username: 'Cooper', id: 15562356 },
    { username: 'Roman Carr', id: 12356 },
    { username: 'Dalton', id: 127755356 },
    { username: 'Archer', id: 123978756 },
    { username: 'Alec Stout', id: 1235900036 },
    { username: 'Will', id: 1236849356 },
    { username: 'Ava', id: 12389991256 },
    { username: 'Isabelle', id: 2003546 },
    { username: 'Luna', id: 1200013356 }
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

  const totalValues = 100

  for (let index = 0; index < totalValues; index++) {
    const r1 = randomIntFromInterval(0, playerNames.length - 1)
    const result = await Leaderboard.create({
      fish_id: fish_ids[randomIntFromInterval(0, fish_ids.length - 1)],
      fish_length: Math.random() * 4,
      fish_width: Math.random() * 2,
      username: playerNames[r1].username,
      user_id: playerNames[r1].id
    }).catch(e => {
      console.log(e)
    })
    const r2 = randomIntFromInterval(0, playerNames.length - 1)
    const result2 = await LeaderboardWeekly.create({
      fish_id: fish_ids[randomIntFromInterval(0, fish_ids.length - 1)],
      fish_length: Math.random() * 4,
      fish_width: Math.random() * 2,
      username: playerNames[r2].username,
      user_id: playerNames[r2].id
    }).catch(e => {
      console.log(e)
    })
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
