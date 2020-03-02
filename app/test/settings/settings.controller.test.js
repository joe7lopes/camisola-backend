const {connect, closeDatabase, clearDatabase} = require('../test-db');
const {SettingsModel} = require('../../db/models');
const app = require('../../app');
const request = require('supertest');

const {expect} = require('chai');

describe('GET /Settings', () => {
  before(async () => await connect());

  const settings = {
    sizes: ['S', 'XL'],
    productDefaultPrice: 5,
    stampingExtraCost: 12
  };

  beforeEach(async () => {
    await SettingsModel.create(settings);
  });

  afterEach(async () => {
    await clearDatabase();
  });

  after(async () => await closeDatabase());

  it('should retrieve settings', async () => {
    const res = await request(app).get('/settings');
    expect(res.status).eq(200);
    expect(res.body).to.eql({
      sizes: ['S', 'XL'],
      productDefaultPrice: 5,
      stampingExtraCost: 12
    });
  });

  it('should update available sizes', async () => {
    await request(app)
      .put('/settings')
      .send({sizes: ['XS']})
      .expect(200);

    const doc = await SettingsModel.findOne();
    expect(doc.toJSON().sizes).eql(['XS']);
  });

  it('should update only default price', async () => {
    await request(app)
      .put('/settings')
      .send({productDefaultPrice: 5})
      .expect(200);

    const doc = await SettingsModel.findOne();
    const data = doc.toJSON();
    expect(data.sizes).eql(settings.sizes);
    expect(data.productDefaultPrice).eq(5);
  });

  it('should update stamping extra cost', async () => {
    await request(app)
      .put('/settings')
      .send({stampingExtraCost: 5})
      .expect(200);

    const doc = await SettingsModel.findOne();
    const data = doc.toJSON();
    expect(data.sizes).eql(settings.sizes);
    expect(data.productDefaultPrice).eq(settings.productDefaultPrice);
    expect(data.stampingExtraCost).eq(5);
  });


});
