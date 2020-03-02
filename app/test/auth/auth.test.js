const app = require('../../app');
const request = require('supertest');
const {expect} = require('chai');


describe('AUTH', () => {

  describe('/POST', () => {

    it('should not generate token', async () => {
      await request(app)
        .post('/auth/register')
        .send({})
        .expect(400);
    });

    it('should not generate token when user is not set', async () => {
      const payload = {
        password: 'xxs',
        clientId:'app-22'
      };
      await request(app)
        .post('/auth/register')
        .send(payload)
        .expect(400);
    });

    it('should not generate token when password is not set', async () => {
      const payload = {
        user:'me',
        clientId:'app-22'
      };

      await request(app)
        .post('/auth/register')
        .send(payload)
        .expect(400);
    });

    it('should not generate token when clientId is not set', async () => {
      const payload = {
        user:'me',
        password:'123',
      };

      await request(app)
        .post('/auth/register')
        .send(payload)
        .expect(400);
    });

    it('should retrieve token', async () => {
      const payload = {
        user: 'me',
        password: 'xxs',
        clientId:'app-22'
      };

      const response = await request(app)
        .post('/auth/register')
        .send(payload)
        .expect(200);

      const token = response.body.token;
      expect(token).to.length.above(0);
    });

  });

});