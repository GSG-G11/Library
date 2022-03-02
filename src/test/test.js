const request = require('supertest');
const app = require('../app');

describe('Test server home page', () => {
  test('GET Route /, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET Route /ss, status 404, content-type html', (done) => {
    request(app)
      .get('/ss')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('POST Route /insertData, status 200, content-type json', (done) => {
    request(app)
      .post('/insertData')
      .expect(200)
      .expect('content-type', /json/)
      .send({ book: 'book1', author: 'author1', date: '1/1/2022' })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
