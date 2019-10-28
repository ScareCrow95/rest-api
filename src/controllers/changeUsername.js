const User = require('../models/User')

module.exports = async data => {
  const errHandler = err => {
    console.error('Error: ', err)
  }

  const result = await User.findOne({
    raw: true,
    where: {
      id: data.id,
      username: data.oldName
    }
  }).catch(errHandler)

  if (result) {
    const result = await User.update(
      {
        username: data.newName
      },
      {
        where: {
          id: data.id
        }
      }
    ).catch(errHandler)
    return 200
  } else {
    return 'user not found'
  }
}
