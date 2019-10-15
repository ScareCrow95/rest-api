const User = require('../models/User')
const createAuthToken = require('../utils/createAuthToken')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }
  const result = await User.create({
    username: data.username
  }).catch(errHandler)

  const token = createAuthToken(
    {
      id: data.id
    },
    false,
    '24h'
  )

  const payload = {
    token,
    id: result.dataValues.id
  }

  console.log(payload)

  return payload
}
