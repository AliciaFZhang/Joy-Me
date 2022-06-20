var models = require('../models/date.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  addDate: (req, res) => {
    console.log('req',req.body.date);
    res.status(200).end();
  }
}