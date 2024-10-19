const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
  const secretKey = 'yourSecretKey';
  const options = {
    expiresIn: '1h', // Token expiration time
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}

module.exports = {
  generateToken,
};
