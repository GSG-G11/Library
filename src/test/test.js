const request = require('supertest');
const app = require('../app');

test("jest is working", () => {
  expect(1).toBe(1);
});

describe('Test server endpoints', () => {
  // Success root endpoint
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
});

test('GET Route /, status 404, content-type html', (done) => {
  request(app)
    .get('/ss')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

test('POST Route /addNote, status 200, content-type json', (done) => {
  request(app)
    .post('/books')
    .expect(302)
    .expect('content-type', /text/)
    .send({ book: 'book1', author: 'author1', date: '1/1/2022' })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

