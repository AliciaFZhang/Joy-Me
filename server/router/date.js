const routerDate = require('express').Router();
var models = require('../models/date.js');



routerDate.post('/', models.addDate);
routerDate.get('/', models.getMydate);

module.exports = routerDate;