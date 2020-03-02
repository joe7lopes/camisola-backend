const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');


module.exports = {
  sign: (payload, options) => {
    const filePath = path.join(__dirname, './private.key');
    const privateKEY = fs.readFileSync(filePath, 'utf8');
    // Token signing options
    const signOptions = {
      subject: options.subject,
      expiresIn: '30d',    // 30 days validity
      algorithm: 'RS256'
    };
    return jwt.sign(payload, privateKEY, signOptions);
  },
  verify: (token, options) => {

    const verifyOptions = {
      subject: options.subject,
      expiresIn: '30d',
      algorithm: ['RS256']
    };
    try {
      const publicKEY = fs.readFileSync('./public.key', 'utf8');
      return jwt.verify(token, publicKEY, verifyOptions);
    } catch (err) {
      return false;
    }
  },
  decode: (token) => {
    return jwt.decode(token, {complete: true});
    //returns null if token is invalid
  }
};