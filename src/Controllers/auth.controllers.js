const authService = require('../Services/auth.service');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const loginControl = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    return res
      .status(400)
      .send({ message: 'User is not register in database' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  console.log(user);

  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Password is not valid' });
  }

  const token = authService.generateToken(user._id);

  res.status(200).send({ token: token });
};

module.exports = {
  loginControl,
};
