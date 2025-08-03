// tests/app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Express API', () => {
  test('GET /hello returns hello message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, world!' });
  });

  test('GET /sum returns sum of a and b', async () => {
    const res = await request(app).get('/sum?a=4&b=7');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ sum: 11 });
  });
});
