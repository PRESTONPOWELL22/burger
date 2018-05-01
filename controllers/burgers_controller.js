var express = require('express')
var router = express.Router()
var burger = require('../models/burger')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/burgers', (req, res) => {
  console.log('got burgers')
  burger.selectAll((data) => {
    // var hbsObj = { burgers: data }
    // console.log(hbsObj)
    res.render('burgers', {layout: false, burgers: data})
  })
})

router.post('/burger/create', (req, res) => {
  console.log(req.body.burgerName)
  burger.insertOne(req.body.burgerName, () => {
    res.redirect('/burgers')
  })
})

router.post('burger/devour/:id', (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.redirect('/burgers')
  })
})

module.exports = router
