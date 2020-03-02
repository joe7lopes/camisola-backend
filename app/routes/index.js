const express = require('express');

const authController = require('../auth/auth.controller');
const productsController = require('../products/products.controller');
const settingsController = require('../settings/settings.controller');

const router = express.Router();

router.use('/auth/register', authController);
router.use('/products', productsController);
router.use('/settings', settingsController);
router.get('/', (req, res) => res.send('invalid'));

module.exports = router;
