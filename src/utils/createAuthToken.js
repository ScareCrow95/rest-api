const jwt = require('jsonwebtoken')
const authKeys = require('../../config/auth')

module.exports = (object, isFb, expiration = '') => {
  console.log(isFb)

  if (expiration) {
    return jwt.sign(
      object,
      Buffer.from(isFb ? authKeys.jwtfb : authKeys.jwt, 'base64'),
      {
        expiresIn: expiration
      }
    )
  } else {
    return jwt.sign(
      object,
      Buffer.from(isFb ? authKeys.jwtfb : authKeys.jwt, 'base64')
    )
  }
}
