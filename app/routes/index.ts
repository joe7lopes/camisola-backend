import { Request, Response } from "express";

const router = require('express').Router();
const productsController = require('../products/controller');

router.use('/products', productsController);
router.get('/', (req: Request, res: Response) => res.send('invalid'));

module.exports = router;
