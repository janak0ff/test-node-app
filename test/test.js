const request = require('supertest');
const server = require('../app'); // reference to your app.js file
const expect = require('chai').expect;

describe('GET /', () => {
  it('responds with Hello World', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        // We use chai's expect to check the response body
        expect(res.text).to.contain('Hello World');
        done();
      });
  });

  after((done) => {
    server.close(done);
  });
});