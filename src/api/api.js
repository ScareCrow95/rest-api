const express = require('express')
const morgan = require('morgan')
const authKeys = require('../../config/auth')
const jwt = require('jsonwebtoken')
const api = express()

const fbGameRouter = require('./routes/fbGameRoutes')
const gameRouter = require('./routes/gameRoutes')
const handleRequest = require('./handleRequest')
const handleError = require('../utils/handleError')

const authenticateUserFb = require('../controllers/authenticateUserFb')
const authenticateUser = require('../controllers/authenticateUser')
const createUser = require('../controllers/createUser')

api.use(morgan('dev'))
api.use(express.json())

api.post('/create-user', (req, res) => {
  handleRequest(req, res, createUser)
})

api.post('/authenticate', (req, res) => {
  handleRequest(req, res, authenticateUser)
})

api.post('/fb-authenticate', (req, res) => {
  handleRequest(req, res, authenticateUserFb)
})

api.use('/api', async (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Authorization')
  try {
    if (req.get('Authorization')) {
      const token = req.get('Authorization').split(' ')[1]
      let decoded
      try {
        decoded = jwt.verify(token, Buffer.from(authKeys.jwt, 'base64'))
      } catch (err) {
        console.log(err)
        throw new Error('wrong jwt-token')
      }
      // req.body.id = decoded.id

      next()
    } else {
      return res.sendStatus(401)
    }
  } catch (err) {
    return handleError(err, res)
  }
})

api.use('/fb', async (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Authorization')
  try {
    if (req.get('Authorization')) {
      const token = req.get('Authorization').split(' ')[1]
      let decoded
      console.log(token)

      try {
        decoded = jwt.verify(token, Buffer.from(authKeys.jwtfb, 'base64'))
      } catch (err) {
        console.log(err)
        throw new Error('wrong jwt-token-facebook')
      }
      req.body.fb_player_id = decoded.fb_player_id
      next()
    } else {
      return res.sendStatus(401)
    }
  } catch (err) {
    return handleError(err, res)
  }
})

api.use('/fb/ucaptain', fbGameRouter)
api.use('/api/ucaptain', gameRouter)

module.exports = api
