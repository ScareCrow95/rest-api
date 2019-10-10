const jwt = require('jsonwebtoken')
const authKeys = require('../../config/auth')

module.exports = (object, expiration = '') => {
  if (expiration) {
    return jwt.sign(object, Buffer.from(authKeys.jwt, 'base64'), {
      expiresIn: expiration
    })
  } else {
    return jwt.sign(object, Buffer.from(authKeys.jwt, 'base64'))
  }
}
