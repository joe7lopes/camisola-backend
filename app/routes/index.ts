const router = require('express').Router();
import { Request, Response } from "express";
import { default as productsController } from '../products/products.controller';
import { default as settingsController } from '../settings/settings.controller';

router.use('/products', productsController);
router.use('/settings', settingsController);
router.get('/', (req: Request, res: Response) => res.send('invalid'));

module.exports = router;
