const axios = require('axios')
const authKeys = require('../../config/auth')
global.apiToken = ''

module.exports = async () => {
  const result = await axios.get(
    `https://graph.facebook.com/oauth/access_token?client_id=${authKeys.appId}&client_secret=${authKeys.appSecret}&grant_type=client_credentials`
  )

  apiToken = result.data.access_token
}
