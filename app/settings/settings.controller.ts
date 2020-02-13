import { Response, Request } from "express";

const router = require('express').Router();
import { getAll } from './settings.service';

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    return res.send(products);
  } catch (err) {
    res.send({ error: err });
  }

});

export default router;
