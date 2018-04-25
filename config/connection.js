var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'port',
  database: 'my_db'
})

module.exports = connection
