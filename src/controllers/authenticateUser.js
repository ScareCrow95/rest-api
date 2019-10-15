const createAuthToken = require('../utils/createAuthToken')
const User = require('../models/User')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }
  console.log(data)

  const result = await User.findAll({
    raw: true,
    where: {
      id: data.id,
      username: data.username
    }
  })

  if (result[0].id) {
    const token = createAuthToken(
      {
        id: data.id
      },
      false,
      '24h'
    )

    const payload = {
      token,
      id: data.id
    }

    console.log(payload)

    return payload
  } else {
    throw new Error('id or name is wrong')
  }
}
