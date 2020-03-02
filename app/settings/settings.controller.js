const router = require('express').Router();
const {SettingsModel} = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const document = await SettingsModel.findOne();
    if (!document) return res.status(404).send({msg: 'record not found'});
    return res.send(document.toJSON());
  } catch (err) {
    console.log(err);
    return res.send({error: err});
  }
});

router.put('/', async (req, res) => {
  try {
    await SettingsModel.updateOne({}, req.body);
    const document = await SettingsModel.findOne();
    if (!document) return res.status(404).send({msg: 'record not found'});
    return res.send(document.toJSON());
  } catch (err) {
    console.log(err);
    return res.send({error: err});
  }
});

module.exports = router;
