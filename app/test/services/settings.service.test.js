const { connect, closeDatabase, clearDatabase } = require('../test-db');
const { SettingsModel } = require('../../db/models');
const app = require('../../app');
const request = require('supertest');

const { expect } = require('chai');

describe('GET /Settings', () => {
  before(async () => await connect());

  beforeEach(async () => {
    const settings = { availableSizes: ['S', 'XL'], productDefaultPrice: 5 };
    await SettingsModel.create(settings);
  });

  afterEach(async () => {
    await clearDatabase();
  });

  after(async () => await closeDatabase());

  it('should retrieve sizes and default prices', async () => {
    const res = await request(app).get('/settings');
    expect(res.status).eq(200);
    expect(res.body).to.eql({
      availableSizes: ['S', 'XL'],
      productDefaultPrice: 5
    });
  });

  it('should update available sizes', async () => {
    const res = await request(app)
      .put('/settings')
      .send({ availableSizes: ['XS'] })
      .expect(200);

    const doc = await SettingsModel.findOne();
    expect(doc.toJSON().availableSizes).eql(['XS']);
  });
});
