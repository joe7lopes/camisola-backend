const {connect, closeDatabase, clearDatabase} = require('../test-db');
const {ProductModel} = require('../../db/models');
const {expect} = require('chai');
const app = require('../../app');
const api = require('supertest')(app);

describe('/products', () => {

  before(async () => await connect());


  afterEach(async () => {
    await clearDatabase();
  });

  after(async () => await closeDatabase());

  it('should empty when no products are registered', async () => {
    const response = await api.get('/products')
      .expect(200);
    expect(response.body).eql([])
  });

  it('should return all products', async () => {
    const newProduct = {
      pid: '1xs',
      name: 'camisola benfica slb glorioso',
      categories: ['benfica'],
      availableSizes: ['S', 'XS', 'L'],
      images: [],
      isCustomizable: true,
      defaultPrice: 35
    };

    await ProductModel.create(newProduct);
    const response = await api.get('/products')
      .expect(200);
    expect(response.body).eql([newProduct])
  });


  describe('/POST', () => {
    it('should create product with unique id', async () => {
      const newProduct = {
        name: 'camisola benfica slb glorioso',
        categories: ['benfica'],
        availableSizes: ['S', 'XS', 'L'],
        images: [],
        isCustomizable: true,
        defaultPrice: 35
      };

      const response = await api.post('/products').send(newProduct).expect(201);
      const pid = response.body.pid;
      expect(pid).to.be.a('string');

      const dataBaseDocument = await ProductModel.findOne({pid});
      expect(dataBaseDocument.toJSON()).eql({pid, ...newProduct});
    });
  })

});