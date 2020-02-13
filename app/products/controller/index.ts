import { Response, Request } from "express";

const router = require('express').Router();
const { getAll } = require('../services/product.service');

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    return res.send(products);
  } catch (err) {
    res.send({ error: err });
  }

});

module.exports = router;
