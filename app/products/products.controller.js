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
    const createdProduct = await ProductModel.create(req.body);
    return res.status(201).send(createdProduct);
  } catch (err) {
    console.log(err);
    return res.status(400).send({error: err});
  }

});

module.exports = router;
