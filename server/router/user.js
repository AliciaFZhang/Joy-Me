const routerUser = require('express').Router();
const controller= require('../controllers/user');

routerUser.post('/info', controller.saveUser);

// routerUser.post('/register', controller.register);
// routerUser.post('/login', controller.login);
module.exports = routerUser;

