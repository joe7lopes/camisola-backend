const router = require('express').Router();
const productsController = require('../products/controller');

router.use('/products', productsController);
router.get('/', (req, res) => res.send('invalid'));

module.exports = router;
