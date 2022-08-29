const router = require('express').Router();
const controllerUser = require('../Controllers/user.controllers');

router.get('/users', controllerUser.findAllUserControl);
router.post('/users/create', controllerUser.createUserControl);

module.exports = router;
