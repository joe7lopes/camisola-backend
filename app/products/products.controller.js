const router = require('express').Router();
const { ProductModel } = require('../db/models');
router.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    return res.send(products);
  } catch (err) {
    return res.send({ error: err });
  }
});

module.exports = router;
