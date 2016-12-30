/*
exports.home = function(req, res) {
  res.send('Home page')
}
*/
exports.home = function(rec, res) {
  res.render('pages/home', {
    title: 'Home page',
    message: 'This is the "home" action of "pages" controller',
    body: 'body home'
  })
}

exports.about = function(rec, res) {
  res.render('pages/about', {
    title: 'About page',
    message: 'Lorem ipsum',
    body: 'About page body'
  })
}
