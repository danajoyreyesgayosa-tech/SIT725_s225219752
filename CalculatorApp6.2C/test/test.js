const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const app = require('../server');

describe('GET /add', () => {

  // ✅ Test 1 — Valid input
  it('should return correct sum for valid numbers', (done) => {
    request(app)
      .get('/add?a=5&b=3')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.include('8');
        done();
      });
  });

  // ✅ Test 2 — Invalid input
  it('should return error for invalid input', (done) => {
    request(app)
      .get('/add?a=abc&b=3')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.include('Error');
        done();
      });
  });

  // ✅ Test 3 — Missing parameter
  it('should return error when one parameter is missing', (done) => {
    request(app)
      .get('/add?a=5')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.include('Error');
        done();
      });
  });

  // ✅ Test 4 — Edge case (negative numbers)
  it('should handle negative numbers correctly', (done) => {
    request(app)
      .get('/add?a=-5&b=-3')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.include('-8');
        done();
      });
  });

});