const createAuthToken = require('../utils/createAuthToken')
const axios = require('axios')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }

  if (data.accessToken) {
    const response = await axios
      .get(
        `https://graph.facebook.com/debug_token?input_token=${data.accessToken}&access_token=${apiToken}`
      )
      .catch(errHandler)

    if (response.data.data.user_id) {
      const token = createAuthToken(
        {
          player_id: response.data.data.user_id
        },
        '24h'
      )

      const payload = {
        token
      }
      console.log(payload)
      return payload
    } else {
      throw new Error('Access Token is Invalid')
    }
  } else {
    throw new Error('Access Token is Missing')
  }
}
