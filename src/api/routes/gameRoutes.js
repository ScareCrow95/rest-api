const express = require('express')
const gameRouter = express.Router()
const handleRequest = require('../handleRequest')
const getLeaderboard = require('../../controllers/getLeaderboards')
const getLeaderboardWeekly = require('../../controllers/getLeaderboardsWeekly')
const saveStats = require('../../controllers/saveStats')
const changeUsername = require('../../controllers/changeUsername')
gameRouter.post('/get-leaderboard', async (req, res) => {
  // fish-id
  handleRequest(req, res, getLeaderboard)
})

gameRouter.post('/get-leaderboard-weekly', async (req, res) => {
  // fish-id
  handleRequest(req, res, getLeaderboardWeekly)
})

gameRouter.post('/change-username', async (req, res) => {
  // id, oldName, newName
  handleRequest(req, res, changeUsername)
})

gameRouter.post('/save-stats', async (req, res) => {
  /*
    fish_id: string
    fish_length: num
    fish_width: num
    username:string
    id: num
    */
  handleRequest(req, res, saveStats)
})

module.exports = gameRouter
