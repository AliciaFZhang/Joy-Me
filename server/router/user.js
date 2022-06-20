const routerUser = require('express').Router();
const controller= require('../controllers/user');



routerUser.post('/register', controller.register);
routerUser.post('/login', controller.login);
// router.get('/secret',)
module.exports = routerUser;

