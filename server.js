//db connection
require('./src/database/connection')

const port = process.env.NODE_ENV === 'development' ? 3499 : 80
const api = require('./src/api/api')
const getFbAccessToken = require('./src/controllers/getFBAccessToken')
const populate = require('./src/utils/createFakeLeaderboad')
const refreshLeaderboards = require('./src/utils/refreshWeeklyLeaderboards')

async function startup() {
  await getFbAccessToken()
  api.listen(port, async () => {
    if (process.env.NODE_ENV !== 'production') {
      // populate()
      refreshLeaderboards()
      console.log('Game server started on port ' + port)
    }
  })
}
startup()
