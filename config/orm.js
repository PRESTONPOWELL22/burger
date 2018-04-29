var connection = require('./connection')

var orm = {
  selectAll: function () {
    connection.query('SELECT * FROM burgers', (e, r) => {
      if (e) throw e
      console.log("success")
      console.log(r)
      return r
    })
  },
  insertOne: function (burgerName) {
    var q = `INSERT INTO burgers(burger_name)
    VALUES ('${burgerName}')`
    connection.query(q, (e, r) => {
      if (e) throw e
      return r
    })
  },
  updateOne: function (id) {
    var q = `UPDATE burgers
    SET devoured = !devoured
    WHERE id = ${id}`
    connection.query(q, (e, r) => {
      if (e) throw e
      return r
    })
  }
}

module.exports = orm
