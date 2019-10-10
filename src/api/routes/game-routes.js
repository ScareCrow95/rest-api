const express = require('express')
const gameRouter = express.Router()
const handleRequest = require('../handleRequest')
const getGame = require('../../controllers/getGame')
const saveGame = require('../../controllers/saveGame')

gameRouter.get('/get-game', async (req, res) => {
  handleRequest(req, res, getGame)
})

gameRouter.post('/save-game', async (req, res) => {
  handleRequest(req, res, saveGame)
})

module.exports = gameRouter
