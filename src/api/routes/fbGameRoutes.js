const express = require('express')
const fbGameRouter = express.Router()
const handleRequest = require('../handleRequest')
const getGame = require('../../controllers/getGame')
const saveGame = require('../../controllers/saveGame')

fbGameRouter.get('/get-game', async (req, res) => {
  handleRequest(req, res, getGame)
})

fbGameRouter.post('/save-game', async (req, res) => {
  handleRequest(req, res, saveGame)
})

module.exports = fbGameRouter
