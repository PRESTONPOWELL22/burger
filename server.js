var express = require('express')

var app = express()
var PORT = 3000

var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
    res.render('index')
})




app.listen(PORT, () => {
    console.log('app listening on port: ' + PORT)
})

