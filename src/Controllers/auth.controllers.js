const authService = require('../Services/auth.service');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const loginControl = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.authService(email);

  if (!user) {
    return res
      .status(400)
      .send({ message: 'User is not register in database' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Password is not valid' });
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      userName,
      email,
      image,
    },
    token,
  });
};

module.exports = {
  loginControl,
};
