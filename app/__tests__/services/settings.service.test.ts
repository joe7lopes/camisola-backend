import DB from '../db';
import app from '../../app';
import request from 'supertest';

describe('GET /Settings', () => {

  beforeAll(() => {
    DB.connect();
  });

  afterAll((done) => {
    DB.disconnect(done);
  });

  it('should add sizes and default prices', async () => {
    const res = await request(app).get('/settings');
    expect(res.status).toBe(200);
  });


});
