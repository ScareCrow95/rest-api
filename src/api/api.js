const express = require('express')
const morgan = require('morgan')
const authKeys = require('../../config/auth')
const api = express()
const gameRouter = require('./routes/game-routes')
const handleRequest = require('./handleRequest')
const authenticateUser = require('../controllers/authenticateUser')
const handleError = require('../utils/handleError')
const jwt = require('jsonwebtoken')

api.use(morgan('dev'))
api.use(express.json())

api.post('/authenticate', (req, res) => {
  handleRequest(req, res, authenticateUser)
})

api.use('/api', async (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Authorization')
  try {
    if (req.get('Authorization')) {
      const token = req.get('Authorization').split(' ')[1]
      console.log(token)
      let decoded
      try {
        decoded = jwt.verify(token, Buffer.from(authKeys.jwt, 'base64'))
      } catch (err) {
        console.log(err)
        throw new Error('4202')
      }
      req.body.player_id = decoded.player_id
      next()
    } else {
      return res.sendStatus(401)
    }
  } catch (err) {
    return handleError(err, res)
  }
})

api.use('/api/ucaptain', gameRouter)

module.exports = api
