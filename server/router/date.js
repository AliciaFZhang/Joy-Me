const routerDate = require('express').Router();
var controllers = require('../controllers/date.js');

routerDate.post('/', controllers.addDate);
routerDate.get('/', controllers.getMydate);
routerDate.get('/alldates', controllers.getAlldates);
routerDate.post('/join', controllers.join);
routerDate.get('/join', controllers.getUserdates);


module.exports = routerDate;