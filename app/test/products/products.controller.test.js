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
      sizes: [{size: 'S', price: 5}, {size: 'XS', price: 12}, {size: 'L', price: 7}],
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

      const sizes = [
        {size: 'S', price: 20},
        {size: 'XS', price: 44},
        {size: 'L', price: 30},
      ];

      const newProduct = {
        name: 'camisola benfica slb glorioso',
        categories: ['benfica'],
        sizes,
        images: [],
        isCustomizable: true,
        defaultPrice: 35
      };

      const newProduct2 = {
        name: 'camisola benfica summer',
        categories: 'benfica',
        sizes,
        images: [],
        isCustomizable: true,
        defaultPrice: 35
      };

      const response1 = await api.post('/products')
        .send(newProduct)
        .expect(201);

      const response2 = await api.post('/products')
        .send(newProduct2)
        .expect(201);

      expect(response1.body.pid).to.be.a('string');
      expect(response2.body.pid).to.be.a('string');
      expect(response1.body.pid).not.eq(response2.body.pid);
    });

    it('should not create product with invalid size', async () => {
      const newProduct = {
        name: 'camisola benfica summer',
        categories: ['benfica'],
        sizes: [{size: 'test', price: 5}],
        images: [],
        isCustomizable: true,
        defaultPrice: 12
      };

      await api.post('/products')
        .send(newProduct)
        .expect(400);
    });

    it('should not create product for unknown categories', async () => {
      const newProduct = {
        name: 'camisola benfica summer',
        categories: ['benf'],
        sizes: [],
        images: [],
        isCustomizable: true,
        defaultPrice: 12
      };

      await api.post('/products')
        .send(newProduct)
        .expect(400);
    });

    it('should not create product if price is not set', async () => {
      const newProduct = {
        name: 'camisola benfica summer',
        categories: ['benfica'],
        sizes: ['S', 'XS', 'L'],
        images: [],
        isCustomizable: true,
      };

      await api.post('/products')
        .send(newProduct)
        .expect(400);
    });

    it('should not create product without a name', async () => {
      const newProduct = {
        categories: ['benfica'],
        sizes: ['S', 'XS', 'L'],
        images: [],
        isCustomizable: true,
        defaultPrice: 35
      };

      await api.post('/products')
        .send(newProduct)
        .expect(400);

    });

  });

});