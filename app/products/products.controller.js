const router = require('express').Router();
const {ProductModel} = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    const response = products.map(p => p.toJSON());
    return res.send(response);
  } catch (err) {
    return res.send({error: err});
  }
});

router.post('/', async (req, res) => {
  try {
    const newProduct = {
      pid: 6,
      ...req.body
    };
    const createdProduct = await ProductModel.create(newProduct);
    return res.status(201).send(createdProduct);
  } catch (err) {
    return res.send({error: err});
  }

});

module.exports = router;
