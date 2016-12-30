/*
module.exports = require(__dirname + '/app/main')


module.exports = process.env.APP_COV
  ? require(__dirname + '/app-cov/main')
  : require(__dirname + '/app/main')
*/

var express = require('express'),
  ejsLocals = require('ejs-locals'),
  app = express(),
  pages = require(__dirname + '/controllers/pages')

// configuration settings
app.engine('ejs', ejsLocals)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

// set views locals
app.use(function(req, res, next) {
  app.locals.route = req.url
  next()
})

// mount routes
app.get('/', function(rec, res) { res.redirect('home') })
app.get('/home', pages.home)
app.get('/about', pages.about)

module.exports = app
