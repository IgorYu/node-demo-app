var request = require('supertest'),
  app = require(__dirname + '/../../app')

describe('GET /about', function() {
  it('should return status code 200', function(done) {
    request(app)
      .get('/about')
      .expect(200, done)
  })

  it('should contain text "About page"', function(done) {
    request(app)
      .get('/about')
      .expect(/About page/, done)
  })
})
