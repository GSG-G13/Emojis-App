/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const {
  getAllEmojis,
  getSearchedEmojis,
} = require('../controllers');

describe('test route /Emojis', () => {
  test('should return array of data from api in success status', (done) => {
    request(app)
      .get('/Emojis', getAllEmojis)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        expect(Array.isArray(res.body)).toBe(true);
        done();
      });
  });
  test('should return page not found when there a clint error', (done) => {
    request(app)
      .get('/Emoji', getAllEmojis)
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});

describe('test route /Emojis/:value', () => {
  test('should return array of data from api in success status', (done) => {
    request(app)
      .get('/Emojis/grinning', getSearchedEmojis)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        expect(Array.isArray(res.body)).toBe(true);
        done();
      });
  });
  test('should return page not found when there a clint error', (done) => {
    request(app)
      .get('/Emoji/grinning', getSearchedEmojis)
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});
