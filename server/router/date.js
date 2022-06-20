const routerDate = require('express').Router();
const controller= require('../controllers/date');



routerDate.post('/', controller.addDate);

module.exports = routerDate;