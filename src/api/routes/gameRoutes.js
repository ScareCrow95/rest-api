const express = require('express')
const gameRouter = express.Router()
const handleRequest = require('../handleRequest')
const getLeaderboard = require('../../controllers/getLeaderboards')
const saveStats = require('../../controllers/saveStats')

gameRouter.post('/get-leaderboard', async (req, res) => {
  // fish-id
  handleRequest(req, res, getLeaderboard)
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
