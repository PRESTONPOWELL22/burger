var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// middleware
app.use(express.static(process.cwd() + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// hbs
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

var router = require('./controllers/burgers_controller')
app.use('/', router)

var PORT = 3000
app.listen(PORT, () => {
  console.log('app listening on port: ' + PORT)
})
