//db connection
require('./src/database/connection')

const port = process.env.NODE_ENV === 'development' ? 3499 : 80
const api = require('./src/api/api')
const getFbAccessToken = require('./src/controllers/getFBAccessToken')
// const populate = require('./src/utils/createFakeLeaderboad')

async function startup() {
  await getFbAccessToken()
  api.listen(port, async () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Game server started on port ' + port)
    }
  })
}
startup()
