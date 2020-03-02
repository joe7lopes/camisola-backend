const router = require('express').Router();
const _ = require('lodash');
const AuthService = require('./auth.service');

router.post('/', async (req, res) => {

  const {user, password, clientId} = req.body;

  if(_.isEmpty(user) || _.isEmpty(password) || _.isEmpty(clientId)){
    return res.status(400).send({error: 'invalid request'});
  }

  const payload = {user, password};
  const options = {subject: clientId};

  const token = await AuthService.sign(payload, options);
  return res.send({token});
});

module.exports = router;