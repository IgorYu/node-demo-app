/*
exports.home = function(req, res) {
  res.send('Home page')
}
*/
exports.home = function(rec, res) {
  res.render('pages/home', {
    title: 'Home page',
    message: 'This is the "home" action of "pages" controller'
  })
}
