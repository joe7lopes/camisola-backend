import DB from '../db';
import { SettingsModel } from '../../db/models';
import app from '../../app';
import request from 'supertest';

describe('GET /Settings', () => {

  beforeAll(() => {
    DB.connect();
  });

  beforeEach((done) => {
    DB.dropCollections(done)
    const settings = { availableSizes: ['S', 'XL'], productDefaultPrice: 5 }
    SettingsModel.create(settings);
  });

  afterAll((done) => {
    DB.disconnect(done);
  });

  it('should retrieve sizes and default prices', async () => {
    const res = await request(app).get('/settings');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
      availableSizes: ['S', 'XL'],
      productDefaultPrice: 5
    });
  });


});
