var orm = require('../config/orm')

var model = {
  selectAll: (cb) => {
    orm.selectAll((res) => {
      cb(res)
    })
  },
  insertOne: (burgerName, cb) => {
    orm.insertOne(burgerName, (res) => {
      cb(res)
    })
  },
  updateOne: (burgerId, cb) => {
    orm.updateOne(burgerId, (res) => {
      cb(res)
    })
  }
}

module.exports = model
