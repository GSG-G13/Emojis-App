/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
const request = require('supertest');
const app = require('../app');

const {
    getGroupes,
    getCatogry,
  } = require('../controllers/index');

describe('test route /groups', () => {
test('/groups/body  expect status to be 200', (done) => {
    request(app)
       .get('/groups/body', getGroupes)
       .expect(200)
       .end((err, res) => {
           if(err)return done(err);
       expect(res.statusCode).toBe(200);
    //    expect(typeof(res.body)).toEqual();
       return done();
       });
   });
   test('/grops/body  expect status to be 404', (done) => {
    request(app)
       .get('/grops/body', getGroupes)
       .expect(404)
       .end((err, res) => {
           if(err)return done(err);
       expect(res.statusCode).toBe(404);
       return done();
       });
   });
});

describe('test route /category', () => {
   test('/categy/:category  expect status to be 404', (done) => {
    request(app)
       .get('/catery/:category', getGroupes)
       .expect(404)
       .end((err, res) => {
           if(err)return done(err);
       expect(res.statusCode).toBe(404);
       return done();
       });
   });
   test('/category/:category  expect status to  be 200', (done) => {
    request(app)
       .get('/category/flags', getGroupes)
       .expect(200)
       .end((err, res) => {
           if(err)return done(err);
           expect(res.statusCode).toBe(200);
       return done();
       });
   });
   test('/category/:category  expect status to be 200', (done) => {
    request(app)
       .get('/category/flags', getCatogry)
       .expect(200)
       .end((err, res) => {
           if(err) return done(err);

            expect(Array.isArray(res.body)).toBe(true);
            return done();
       });
   });

   test('/category/:category  expect status to be 200', (done) => {
    request(app)
       .get('/category/flags', getCatogry)
       .expect(200)
       .end((err, res) => {
           if(err) return done(err);

            expect(typeof res.body[0]).toBe('object');
            return done();
       });
   });

   test('/cegory/:category  expect status to be 404', (done) => {
    request(app)
       .get('/cegory/flags', getCatogry)
       .expect(404)
       .end((err, res) => {
           if(err) return done(err);
            expect(res.statusCode).toBe(404);
            return done();
       });
   });
});
