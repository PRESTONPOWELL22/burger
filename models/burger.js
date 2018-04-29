var orm = require('../config/orm')

var burger = {
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

module.exports = burger
