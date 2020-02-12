const router = require('express').Router();
const { listAll } = require('../services/product.service');

router.get('/', async (req, res) => {
  const products = await listAll();
  res.send(products);
});

module.exports = router;
