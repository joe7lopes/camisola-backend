import { Response, Request } from "express";

const router = require('express').Router();
import { getSettings } from './settings.service';

router.get('/', async (req: Request, res: Response) => {
  // try {
  //   const settings = await getSettings();
  //   return res.send(settings);
  // } catch (err) {
  //   res.send({ error: err });
  // }
  res.send('a');

});



export default router;
