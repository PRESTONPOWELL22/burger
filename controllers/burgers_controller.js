require('../config/orm')
var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('get request to the homepage')
})
