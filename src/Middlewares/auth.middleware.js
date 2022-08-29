require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findUserByIdService } = require('../Services/user.services');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return resizeBy.status(401).send({ message: 'This token is not insert' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).status({ message: 'token invalid!' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer^/i.test(scheme)) {
    return res
      .status(401)
      .send({ message: 'This token is nothing format correct!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = findUserByIdService(decoded.id);

    if (err || !user || user.id) {
      return res.status(401).send({ message: 'Token invalid' });
    }

    req.userId = user.id;

    return next();
  });
};
