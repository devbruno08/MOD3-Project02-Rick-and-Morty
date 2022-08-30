const router = require('express').Router();
const authController = require('../Controllers/auth.controllers');

router.post('/auth/login', authController.loginControl);

module.exports = router;
